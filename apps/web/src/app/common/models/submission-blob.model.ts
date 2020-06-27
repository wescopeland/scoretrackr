import { Score } from './score.model';

export interface SubmissionBlob {
  date: string;
  submissions: Partial<Score>[];
}
