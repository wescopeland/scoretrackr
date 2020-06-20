import { Game } from 'common/models/game.model';
import { Track } from 'common/models/track.model';
import { documentReferenceResolver } from 'common/utils/api/document-reference-resolver';
import { DBScore } from './api/+models';
import { tracksFieldResolver } from './resolvers/game';
import {
  gameQuery,
  recentSubmissionsQuery,
  scoreQuery
} from './resolvers/query';
import { dateScalar } from './resolvers/scalars';
import { positionFieldResolver } from './resolvers/score';
import { submissionCountFieldResolver } from './resolvers/track';

export const gqlResolvers = {
  Date: dateScalar,

  Query: {
    game: gameQuery,
    score: scoreQuery,
    recentSubmissions: recentSubmissionsQuery
  },

  Score: {
    game: (score: DBScore) =>
      documentReferenceResolver<Game>(score, '_gameRef'),
    track: (score: DBScore) =>
      documentReferenceResolver<Track>(score, '_trackRef'),

    position: positionFieldResolver
  },

  Game: {
    tracks: tracksFieldResolver
  },

  Track: {
    submissionCount: submissionCountFieldResolver
  }
};
