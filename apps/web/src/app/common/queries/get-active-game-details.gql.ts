export const GetActiveGameDetails = `
  query GetActiveGameDetails($id: String!) {
    game(id: $id) {
      color
      name
      tracks {
        id
        friendlyId
        name
        submissionCount
      }
    }
  }
`;
