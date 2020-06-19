import { ApolloError } from 'apollo-server';
import { format, fromUnixTime } from 'date-fns';

import { Score } from 'common/models/score.model';
import { SubmissionBlob } from 'common/models/submission-blob.model';
import { getDocumentDataWithId } from 'common/utils/api';
import { DBScore } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

export const recentSubmissionsQuery = async (
  _: null,
  args: { limitToDays: number }
) => {
  try {
    const scoreDocs = await db
      .firestore()
      .collection('scores')
      .limit(60)
      .orderBy('submittedAt', 'desc')
      .get();

    const submissionBlobs = [];
    const datesTracked: string[] = [];

    let currentSubmissionBlob: SubmissionBlob = {
      date: null,
      submissions: []
    };

    for (const scoreDoc of scoreDocs.docs) {
      const dbScore = getDocumentDataWithId(scoreDoc) as DBScore;

      const parsedDate = fromUnixTime(dbScore.submittedAt.seconds);
      const formattedSubmittedAtDate = format(parsedDate, 'yyyy-MM-dd');

      if (datesTracked.includes(formattedSubmittedAtDate)) {
        // Fall into this case if we're already building a
        // submission blob for this date.

        currentSubmissionBlob.submissions.push((dbScore as unknown) as Score);
      } else if (datesTracked.length < args.limitToDays) {
        // Fall into this case if we're not building a submission blob for
        // this date, but we still have room to do so.

        // Finish off the previous submission blob if it's there.
        if (currentSubmissionBlob.date) {
          submissionBlobs.push(currentSubmissionBlob);
          currentSubmissionBlob = { date: null, submissions: [] };
        }

        datesTracked.push(formattedSubmittedAtDate); // => ['2016-05-05']

        // Start building the new blob.
        currentSubmissionBlob.date = parsedDate.toISOString();
        currentSubmissionBlob.submissions.push((dbScore as unknown) as Score);
      }
    }

    // We just finished building the last submission blob.
    // Make sure it ends up in the response payload.
    if (currentSubmissionBlob.date) {
      submissionBlobs.push(currentSubmissionBlob);
    }

    return submissionBlobs;
  } catch (err) {
    throw new ApolloError(err);
  }
};
