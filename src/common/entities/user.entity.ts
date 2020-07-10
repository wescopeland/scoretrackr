import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { UserRole } from './user-role.model';
import { User } from './user.model';
import { VerificationTokenEntity } from './verification-token.entity';

@Entity('users')
@ObjectType()
export class UserEntity extends BaseEntity implements User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text', { unique: true })
  email: string;

  @Field(() => String)
  @Column('text', { unique: true })
  username: string;

  @Column('text')
  password: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Field(() => Date)
  @Column('timestamp')
  createdAt: Date;

  @Field(() => Boolean)
  @Column('boolean')
  isVerified: boolean;

  @Field(() => VerificationTokenEntity)
  @OneToOne((type) => VerificationTokenEntity)
  @JoinColumn()
  verificationToken: VerificationTokenEntity;
}
