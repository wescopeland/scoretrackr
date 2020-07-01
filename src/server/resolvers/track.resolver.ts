import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';

import { Score, Track } from 'common/entities';

@Resolver((of) => Track)
export class TrackResolver {
  @Query((returns) => [Track])
  async tracksByGameId(@Arg('gameId') gameId: string) {
    return Track.find({ game: { id: gameId } });
  }

  @FieldResolver((returns) => Number)
  async submissionCount(@Root() track: Track) {
    const [scores, count] = await Score.findAndCount({ track });

    return count;
  }
}
