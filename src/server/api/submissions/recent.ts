import { format } from 'date-fns';
import { Request, Response } from 'express';

import { Submission, SubmissionBlob } from 'state/most-recent-submissions';
import { getDocumentByReference, unallowedHttpMethodResponse } from 'utils/api';
import { DBGame, DBScore, DBTrack } from '../+models';
import { db } from '../../firebase-admin-app';

const buildSubmissionFromScore = async (
  score: DBScore
): Promise<Submission> => {
  const [track, game] = (await Promise.all([
    getDocumentByReference(score._trackRef),
    getDocumentByReference(score._gameRef)
  ])) as [DBTrack, DBGame];

  return {
    playerAlias: score.playerAlias,
    game: {
      name: game.name,
      friendlyId: game.friendlyId,
      color: game.color
    },
    track: track.name,
    score: score.finalScore,
    position: 5 // TODO
  };
};

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'GET':
      const scoresSnapshot = await db
        .firestore()
        .collection('scores')
        .limit(60)
        .orderBy('submittedAt', 'desc')
        .get();

      const submissionBlobs = [];
      const datesTracked: string[] = [];

      let currentSubmissionBlob: Partial<SubmissionBlob> = {
        date: null,
        submissions: []
      };

      for (const scoreDocument of scoresSnapshot.docs) {
        const dbScore = scoreDocument.data() as DBScore;

        const submittedAtDate: Date = dbScore.submittedAt.toDate();
        const formattedSubmittedAtDate = format(submittedAtDate, 'yyyy-MM-dd');

        if (datesTracked.includes(formattedSubmittedAtDate)) {
          // Fall into this case if we're already building a
          // submission blob for this date.

          currentSubmissionBlob.submissions.push(
            await buildSubmissionFromScore(dbScore)
          );
        } else if (datesTracked.length < 3) {
          // Fall into this case if we're not building a submission blob for
          // this date, but we still have room to do so.

          // Finish off the previous submission blob if it's there.
          if (currentSubmissionBlob.date) {
            submissionBlobs.push(currentSubmissionBlob);
            currentSubmissionBlob = { date: null, submissions: [] };
          }

          datesTracked.push(formattedSubmittedAtDate); // => ['2016-05-05']

          // Start building the new blob.
          currentSubmissionBlob.date = submittedAtDate.toISOString();
          currentSubmissionBlob.submissions.push(
            await buildSubmissionFromScore(dbScore)
          );
        }
      }

      // We just finished building the last submission blob.
      // Make sure it ends up in the response payload.
      if (currentSubmissionBlob.date) {
        submissionBlobs.push(currentSubmissionBlob);
      }

      return res.status(200).send(submissionBlobs);

    default:
      return unallowedHttpMethodResponse(['GET'], req.method, res);
  }
};
