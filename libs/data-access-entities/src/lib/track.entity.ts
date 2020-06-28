import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { Game } from './game.entity';

@Entity()
@ObjectType()
export class Track extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text')
  name: string;

  @Field(() => String)
  @Column('text')
  friendlyId: string;

  @Field(() => Game)
  @ManyToOne((type) => Game, (game) => game.id)
  game: Game;

  submissionCount: number;
}
