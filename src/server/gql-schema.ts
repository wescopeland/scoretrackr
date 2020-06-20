import { gql } from 'apollo-server';

export const gqlSchema = gql`
  scalar Date

  type Game {
    id: ID!
    name: String!
    color: String!
    friendlyId: String!
    tracks: [Track]!
  }

  type Track {
    id: ID!
    name: String!
    friendlyId: String!
    submissionCount: Int!
  }

  type Score {
    id: ID!
    playerAlias: String!
    finalScore: Float!
    platform: String!
    submittedAt: Date!
    position: Int!
    game: Game!
    track: Track!
    trackId: String!
  }

  type SubmissionBlob {
    date: Date!
    submissions: [Score]!
  }

  type Query {
    game(friendlyId: String!): Game
    score(id: String!): Score
    recentSubmissions(limitToDays: Int!): [SubmissionBlob]
  }
`;
