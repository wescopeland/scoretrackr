import { Track } from '@prisma/client';

export interface TrackWithSubmissionCount extends Track {
  submissionCount: number;
}
