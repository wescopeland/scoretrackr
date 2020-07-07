import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { UserRole } from './user-role.model';
import { User } from './user.model';

@Entity('user')
@ObjectType()
export class UserEntity extends BaseEntity implements User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column('text')
  email: string;

  @Field(() => String)
  @Column('text')
  username: string;

  @Column('text')
  password: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Field(() => Date)
  @Column('timestamp')
  createdAt: Date;
}
