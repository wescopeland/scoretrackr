import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root
} from 'type-graphql';
import { getConnection, LessThanOrEqual } from 'typeorm';

import { ScoreEntity } from 'common/entities';
import { filterScoresByPlayerTop } from '../utils/filter-scores-by-player-top';

interface PositionRecord {
  position: number;
  score: number;
}

@Resolver((of) => ScoreEntity)
export class ScoreResolver implements ResolverInterface<ScoreEntity> {
  @Query((returns) => ScoreEntity)
  async score(@Arg('id') id: string) {
    return ScoreEntity.findOne(id);
  }

  @FieldResolver()
  async track(@Root() score: ScoreEntity) {
    const track = await getConnection()
      .createQueryBuilder()
      .relation(ScoreEntity, 'track')
      .of(score)
      .loadOne();

    return track;
  }

  @FieldResolver()
  async game(@Root() score: ScoreEntity) {
    const game = await getConnection()
      .createQueryBuilder()
      .relation(ScoreEntity, 'game')
      .of(score)
      .loadOne();

    return game;
  }

  @FieldResolver((returns) => Number, { nullable: true })
  async position(
    @Root() score: ScoreEntity,
    @Arg('onDate', { nullable: true }) onDate?: string
  ) {
    const cutoffDate = onDate ? new Date(onDate) : new Date();

    const track = await getConnection()
      .createQueryBuilder()
      .relation(ScoreEntity, 'track')
      .of(score)
      .loadOne();

    const allTrackScores = await ScoreEntity.find({
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
