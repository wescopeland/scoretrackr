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
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Number)
  @Column()
  finalScore: number;

  @Field(() => String)
  @Column()
  platform: string;

  @Field(() => String)
  @Column()
  playerAlias: string;

  @Field(() => Date)
  @Column()
  submittedAt: Date;

  @Field(() => Game)
  @ManyToOne((type) => Game, (game) => game.id)
  game: Game;

  @Field(() => Track)
  @ManyToOne((type) => Track, (track) => track.id)
  track: Track;

  position: number;
}
