import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ResetPasswordToken } from './reset-password-token.model';

@Entity('reset_password_tokens')
@ObjectType()
export class ResetPasswordTokenEntity extends BaseEntity
  implements ResetPasswordToken {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text', { unique: true })
  token: string;

  @Field(() => Date)
  @Column('timestamp')
  expiresOn: Date;
}
