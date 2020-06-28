import { Arg, FieldResolver, Resolver, Root, Query, ID } from 'type-graphql';
import { LessThanOrEqual } from 'typeorm';

import { Score, Track } from '@scoretrackr/data-access-entities';
import { createDbTimestamp } from '../utils/create-db-timestamp';
import { filterScoresByPlayerTop } from '../utils/filter-scores-by-player-top';

@Resolver((of) => Score)
export class TrackLeaderboardResolver {
  @Query((returns) => [Score])
  async trackLeaderboard(
    @Arg('trackId') trackId: string,
    @Arg('onDate', { nullable: true }) onDate?: string
  ) {
    const cutoffDate = onDate ? createDbTimestamp(onDate) : createDbTimestamp();

    const track = await Track.findOne({ id: trackId });
    const trackScores = await Score.find({
      where: { track, submittedAt: LessThanOrEqual(cutoffDate) },
      order: { finalScore: 'DESC' }
    });

    const onlyPersonalBestScores = filterScoresByPlayerTop(trackScores);

    return onlyPersonalBestScores;
  }
}
