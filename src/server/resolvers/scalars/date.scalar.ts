import { Timestamp } from '@google-cloud/firestore';
import { GraphQLScalarType } from 'graphql';

export const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Firestore timestamp',
  parseValue(value) {
    console.log('parseValue', value);
    return value;
  },
  serialize(value: Timestamp & Date) {
    if (value.seconds) {
      return value.toDate();
    }

    return value;
  }
});
