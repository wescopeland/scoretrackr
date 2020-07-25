export const getTrackLeaderboard = `
  query GetTrackLeaderboard($trackId: String!) {
    trackLeaderboard(trackId: $trackId) {
      id
      playerAlias
      finalScore
      submittedAt
      platform
      position
    }
  }
`;