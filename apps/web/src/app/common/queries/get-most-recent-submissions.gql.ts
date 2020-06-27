export const GetMostRecentSubmissions = `
  query GetMostRecentSubmissions($limitToDays: Float!) {
    recentSubmissions(limitToDays: $limitToDays) {
      date
      submissions {
        playerAlias
        finalScore
        position
        game {
          name
          color
          id
        }
        track {
          name
          friendlyId
        }
      }
    }
  }
`;
