import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { Game } from './game.entity';
import { Track } from './track.entity';

@Entity()
@ObjectType()
export class Score extends BaseEntity {
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

  @Field(() => Game)
  @ManyToOne((type) => Game, (game) => game.id)
  game: Game;

  @Field(() => Track)
  @ManyToOne((type) => Track, (track) => track.id)
  track: Track;

  position: number;
}
