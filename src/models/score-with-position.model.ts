import { Score } from '@prisma/client';

export interface ScoreWithPosition extends Score {
  position: number;
}
