import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { VerificationToken } from './verification-token.model';

@Entity('verification_tokens')
@ObjectType()
export class VerificationTokenEntity extends BaseEntity
  implements VerificationToken {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text', { unique: true })
  token: string;
}
