import { Submission } from './submission.model';

export interface SubmissionBlob {
  date: string;
  submissions: Submission[];
}
