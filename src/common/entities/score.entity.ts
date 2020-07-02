import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { GameEntity } from './game.entity';
import { Score } from './score.model';
import { TrackEntity } from './track.entity';

@Entity('score')
@ObjectType()
export class ScoreEntity extends BaseEntity implements Score {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Number)
  @Column('integer')
  finalScore: number;

  @Field(() => String)
  @Column('text')
  platform: string;

  @Field(() => String)
  @Column('text')
  playerAlias: string;

  @Field(() => Date)
  @Column('timestamp')
  submittedAt: Date;

  @Field(() => GameEntity)
  @ManyToOne((type) => GameEntity, (game) => game.id)
  game: GameEntity;

  @Field(() => TrackEntity)
  @ManyToOne((type) => TrackEntity, (track) => track.id)
  track: TrackEntity;

  position: number;
}
