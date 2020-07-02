import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';

import { ScoreEntity, TrackEntity } from 'common/entities';

@Resolver((of) => TrackEntity)
export class TrackResolver {
  @Query((returns) => [TrackEntity])
  async tracksByGameId(@Arg('gameId') gameId: string) {
    return TrackEntity.find({ game: { id: gameId } });
  }

  @FieldResolver((returns) => Number)
  async submissionCount(@Root() track: TrackEntity) {
    const [scores, count] = await ScoreEntity.findAndCount({ track });

    return count;
  }
}
