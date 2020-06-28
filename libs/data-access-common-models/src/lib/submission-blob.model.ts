import { ObjectType, Field } from 'type-graphql';

import { Score } from '@scoretrackr/data-access-entities';

@ObjectType()
export class SubmissionBlob {
  @Field(() => String)
  date: string;

  @Field(() => [Score])
  submissions: Partial<Score>[];
}
