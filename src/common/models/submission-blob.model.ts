import { Field, ObjectType } from 'type-graphql';

import { Score } from 'common/entities';

@ObjectType()
export class SubmissionBlob {
  @Field(() => String)
  date: string;

  @Field(() => [Score])
  submissions: Partial<Score>[];
}
