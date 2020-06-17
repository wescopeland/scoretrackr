import { tracksFieldResolver } from './resolvers/game';
import {
  gameQuery,
  recentSubmissionsQuery,
  scoreQuery
} from './resolvers/query';
import { dateScalar } from './resolvers/scalars';
import {
  gameFieldResolver,
  positionFieldResolver,
  trackFieldResolver
} from './resolvers/score';

export const gqlResolvers = {
  Date: dateScalar,

  Query: {
    game: gameQuery,
    score: scoreQuery,
    recentSubmissions: recentSubmissionsQuery
  },

  Score: {
    game: gameFieldResolver,
    position: positionFieldResolver,
    track: trackFieldResolver
  },

  Game: {
    tracks: tracksFieldResolver
  }
};
