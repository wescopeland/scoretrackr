import { Arg, Resolver, Query, ObjectType, Field } from 'type-graphql';
import { format, fromUnixTime } from 'date-fns';

import { SubmissionBlob } from './submission-blob.model';
import { Score } from '../entity/score.entity';

@Resolver()
export class RecentSubmissionsResolver {
  @Query((returns) => [SubmissionBlob])
  async recentSubmissions(@Arg('limitToDays') limitToDays: number) {
    const scores = await Score.find({
      take: 60,
      order: { submittedAt: 'DESC' }
    });

    const returnSubmissionBlobs = [];
    const datesTracked: string[] = [];

    let currentSubmissionBlob: SubmissionBlob = {
      date: null,
      submissions: []
    };

    scores.forEach((score) => {
      const parsedDate = fromUnixTime(score.submittedAt.getTime() / 1000);
      const formattedSubmittedAtDate = format(parsedDate, 'yyyy-MM-dd');

      if (datesTracked.includes(formattedSubmittedAtDate)) {
        // Fall into this case if we're already building a
        // submission blob for this date.

        currentSubmissionBlob.submissions.push(score);
      } else if (datesTracked.length < limitToDays) {
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
        currentSubmissionBlob.submissions.push(score);
      }
    });

    // We just finished building the last submission blob.
    // Make sure it ends up in the response payload.
    if (currentSubmissionBlob.date) {
      returnSubmissionBlobs.push(currentSubmissionBlob);
    }

    return returnSubmissionBlobs;
  }
}
