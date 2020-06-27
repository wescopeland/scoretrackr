import { ObjectType, Field } from 'type-graphql';

import { Score } from '../entity/score.entity';

@ObjectType()
export class SubmissionBlob {
  @Field(() => String)
  date: string;

  @Field(() => [Score])
  submissions: Partial<Score>[];
}
