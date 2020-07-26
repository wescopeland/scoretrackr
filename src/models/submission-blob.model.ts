import { Score } from '@prisma/client';

export interface SubmissionBlob {
  date: string;
  submissions: Partial<Score>[];
}
