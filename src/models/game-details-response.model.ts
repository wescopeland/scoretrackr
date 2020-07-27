import { Track } from '@prisma/client';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: Track[];
}
