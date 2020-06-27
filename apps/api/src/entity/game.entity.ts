import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { Track } from './track.entity';

@Entity()
@ObjectType()
export class Game extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  color: string;

  @Field(() => [Track])
  @OneToMany((type) => Track, (track) => track.game)
  tracks: Track[];
}
