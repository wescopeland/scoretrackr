import { ScoreGetPayload } from '@prisma/client';

export interface SubmissionBlob {
  date: string;
  submissions: ScoreGetPayload<{
    include: { game: true; track: true; position: true };
  }>[];
}
