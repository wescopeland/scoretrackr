import { Arg, FieldResolver, Resolver, Root, Query } from 'type-graphql';

import { Score, Track } from '@scoretrackr/data-access-entities';

@Resolver((of) => Track)
export class TrackResolver {
  @Query((returns) => [Track])
  async tracksByGameId(@Arg('gameId') gameId: string) {
    return await Track.find({ game: { id: gameId } });
  }

  @FieldResolver((returns) => Number)
  async submissionCount(@Root() track: Track) {
    const [scores, count] = await Score.findAndCount({ track });

    return count;
  }
}
