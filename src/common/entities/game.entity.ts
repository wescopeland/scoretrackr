import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Game } from './game.model';
import { TrackEntity } from './track.entity';

@Entity('games')
@ObjectType()
export class GameEntity extends BaseEntity implements Game {
  @Field(() => ID)
  @PrimaryColumn('text')
  id: string;

  @Field(() => String)
  @Column('text')
  name: string;

  @Field(() => String)
  @Column('text')
  color: string;

  @Field(() => [TrackEntity])
  @OneToMany((type) => TrackEntity, (track) => track.game)
  tracks: TrackEntity[];
}
