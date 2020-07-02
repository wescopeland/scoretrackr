import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { GameEntity } from './game.entity';
import { Track } from './track.model';

@Entity('track')
@ObjectType()
export class TrackEntity extends BaseEntity implements Track {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text')
  name: string;

  @Field(() => String)
  @Column('text')
  friendlyId: string;

  @Field(() => GameEntity)
  @ManyToOne((type) => GameEntity, (game) => game.id)
  game: GameEntity;

  submissionCount: number;
}
