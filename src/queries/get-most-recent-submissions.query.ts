export const getMostRecentSubmissionsQuery = `
  query GetMostRecentSubmissions($limitToDays: Float!) {
    recentSubmissions(limitToDays: $limitToDays) {
      date
      submissions {
        playerAlias
        finalScore
        position
        game {
          id
          name
          color
        }
        track {
          name
          friendlyId
        }
      }
    }
  }
`;