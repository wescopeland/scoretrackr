import { Arg, Query, Resolver } from 'type-graphql';
import { LessThanOrEqual } from 'typeorm';

import { ScoreEntity, TrackEntity } from '~/entities';
import { filterScoresByPlayerTop } from '~/utils/filter-scores-by-player-top';

@Resolver((of) => ScoreEntity)
export class TrackLeaderboardResolver {
  @Query((returns) => [ScoreEntity])
  async trackLeaderboard(
    @Arg('trackId') trackId: string,
    @Arg('onDate', { nullable: true }) onDate?: string
  ) {
    const cutoffDate = onDate ? new Date(onDate) : new Date();

    const track = await TrackEntity.findOne({ id: trackId });
    const trackScores = await ScoreEntity.find({
      where: { track, submittedAt: LessThanOrEqual(cutoffDate) },
      order: { finalScore: 'DESC' }
    });

    const onlyPersonalBestScores = filterScoresByPlayerTop(trackScores);

    return onlyPersonalBestScores;
  }
}
