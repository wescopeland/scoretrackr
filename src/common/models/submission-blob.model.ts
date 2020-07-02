import { Field, ObjectType } from 'type-graphql';

import { ScoreEntity } from 'common/entities';

@ObjectType()
export class SubmissionBlob {
  @Field(() => String)
  date: string;

  @Field(() => [ScoreEntity])
  submissions: Partial<ScoreEntity>[];
}
