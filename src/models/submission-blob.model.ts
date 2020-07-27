import { SubmissionBlobScore } from './submission-blob-score.model';

export interface SubmissionBlob {
  date: string;
  submissions: SubmissionBlobScore[];
}
