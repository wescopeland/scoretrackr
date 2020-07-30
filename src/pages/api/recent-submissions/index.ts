import { PrismaClient } from '@prisma/client';
import { format, fromUnixTime } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';

import { SubmissionBlobScore } from '~/models/submission-blob-score.model';
import { SubmissionBlob } from '~/models/submission-blob.model';
import { getScorePosition } from '~/utils/api/get-score-position';
import { filterScoresByPlayerTop } from '~/utils/filter-scores-by-player-top';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const scores = await prisma.score.findMany({
        take: 20,
        orderBy: { submittedAt: 'desc' },
        select: {
          id: true,
          finalScore: true,
          playerAlias: true,
          submittedAt: true,
          game: {
            select: {
              id: true,
              name: true,
              color: true
            }
          },
          track: {
            select: {
              id: true,
              name: true,
              friendlyId: true
            }
          }
        }
      });

      const returnSubmissionBlobs = [];
      const datesTracked: string[] = [];

      let currentSubmissionBlob: SubmissionBlob = {
        date: null,
        submissions: []
      };

      for (const score of scores as SubmissionBlobScore[]) {
        const parsedDate = fromUnixTime(score.submittedAt.getTime() / 1000);
        const formattedSubmittedAtDate = format(parsedDate, 'yyyy-MM-dd');

        const trackScores = await prisma.score.findMany({
          where: { track: score.track }
        });

        const onlyTopTrackScores = filterScoresByPlayerTop(trackScores);
        score.position = getScorePosition(score, onlyTopTrackScores);

        if (datesTracked.includes(formattedSubmittedAtDate)) {
          // Fall into this case if we're already building a
          // submission blob for this date.

          currentSubmissionBlob.submissions.push(score as SubmissionBlobScore);
        } else {
          // Fall into this case if we're not building a submission blob for
          // this date, but we still have room to do so.

          // Finish off the previous submission blob if it's there.
          if (currentSubmissionBlob.date) {
            returnSubmissionBlobs.push(currentSubmissionBlob);
            currentSubmissionBlob = { date: null, submissions: [] };
          }

          datesTracked.push(formattedSubmittedAtDate); // => ['2016-05-05T04:00:00.000Z']

          // Start building the new blob.
          currentSubmissionBlob.date = parsedDate.toISOString();
          currentSubmissionBlob.submissions.push(score as SubmissionBlobScore);
        }
      }

      // We just finished building the last submission blob.
      // Make sure it ends up in the response payload.
      if (currentSubmissionBlob.date) {
        returnSubmissionBlobs.push(currentSubmissionBlob);
      }

      return res.status(200).json(returnSubmissionBlobs);

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method not allowed.');
  }
};
