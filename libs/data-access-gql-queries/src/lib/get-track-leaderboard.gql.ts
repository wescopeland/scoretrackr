export const GetTrackLeaderboard = `
  query GetTrackLeaderboard($trackId: String!) {
    trackLeaderboard(trackId: $trackId) {
      playerAlias
      finalScore
      submittedAt
    }
  }
`;
