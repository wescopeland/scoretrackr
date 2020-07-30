import { Game, Score, Track } from '@prisma/client';

export interface SubmissionBlobScore extends Partial<Score> {
  game: Partial<Game>;
  track: Partial<Track>;
  position: number;
}
