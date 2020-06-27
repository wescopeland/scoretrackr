import {
  Arg,
  FieldResolver,
  Resolver,
  ResolverInterface,
  Root,
  Query
} from 'type-graphql';
import { LessThanOrEqual } from 'typeorm';

import { Game } from '../entity/game.entity';
import { Score } from '../entity/score.entity';
import { Track } from '../entity/track.entity';
import { createDbTimestamp } from '../utils/create-db-timestamp';
import { filterScoresByPlayerTop } from '../utils/filter-scores-by-player-top';

interface PositionRecord {
  position: number;
  score: number;
}

@Resolver((of) => Score)
export class ScoreResolver implements ResolverInterface<Score> {
  @Query((returns) => Score)
  async score(@Arg('id') id: string) {
    return await Score.findOne(id);
  }

  @FieldResolver()
  async track(@Root() score: Score) {
    return await Track.findOne(score.track);
  }

  @FieldResolver()
  async game(@Root() score: Score) {
    return await Game.findOne(score.game);
  }

  @FieldResolver((returns) => Number, { nullable: true })
  async position(
    @Root() score: Score,
    @Arg('onDate', { nullable: true }) onDate?: string
  ) {
    const cutoffDate = onDate ? createDbTimestamp(onDate) : createDbTimestamp();

    const track = await Track.findOne(score.track);
    const allTrackScores = await Score.find({
      where: { track, submittedAt: LessThanOrEqual(cutoffDate) },
      order: { finalScore: 'DESC' }
    });

    const filteredScores = filterScoresByPlayerTop(allTrackScores);

    const positions: PositionRecord[] = [];
    let tieCounter = 1;

    for (const [index, filteredScore] of filteredScores.entries()) {
      if (index === 0) {
        positions[index] = { position: 1, score: filteredScore.finalScore };
      } else if (positions[index - 1].score === filteredScore.finalScore) {
        // Fall into this block if this score ties the previous one.
        tieCounter += 1;
        positions[index] = {
          position: positions[index - 1].position,
          score: filteredScore.finalScore
        };
      } else {
        // Fall into this block if we're not tied.
        positions[index] = {
          position: positions[index - 1].position + tieCounter,
          score: filteredScore.finalScore
        };

        tieCounter = 1; // In case the previous record was a tie.
      }
    }

    // All the position records have been built. Try to find the
    // input score in the list of records.
    const positionRecord = positions.find((p) => p.score === score.finalScore);

    return positionRecord?.position ?? null;
  }
}
