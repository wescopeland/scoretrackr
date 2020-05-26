import mostRecentSubmissions from "./mostRecentSubmissions";
import {
  mockRequest,
  mockResponse,
  mockFirestoreReference,
} from "@utils/testing";

jest.mock("./_firebaseAdmin", () => ({
  firebaseAdminApp: {
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        get: jest.fn().mockReturnValue({
          docs: [
            {
              id: "123",
              data: () => ({
                playerAlias: "mockPlayerAlias",
                finalScore: 1200300,
                game: mockFirestoreReference({ name: "Donkey Kong" }),
                platform: "Arcade PCB",
                timeSubmitted: 12312123912,
              }),
            },
          ],
        }),
      }),
    }),
  },
}));

describe("Endpoint: mostRecentSubmissions", () => {
  it("exists", () => {
    // Assert
    expect(mostRecentSubmissions).toBeDefined();
  });

  describe("GET", () => {
    it("returns all the scores in the database", async () => {
      // Arrange
      const req = mockRequest("GET", null);
      const res = mockResponse();

      // Act
      await mostRecentSubmissions(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        scores: [
          {
            finalScore: 1200300,
            game: { name: "Donkey Kong" },
            id: "123",
            platform: "Arcade PCB",
            playerAlias: "mockPlayerAlias",
            timeSubmitted: 12312123912,
          },
        ],
      });
    });
  });

  describe("Other methods", () => {
    it("returns a 405 error", async () => {
      // Arrange
      const req = mockRequest("POST", null);
      const res = mockResponse();

      // Act
      await mostRecentSubmissions(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(405);
    });
  });
});
