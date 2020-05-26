import ping from "./ping";
import { mockRequest, mockResponse } from "@utils/testing";

describe("Endpoint: ping", () => {
  it("exists", () => {
    // Assert
    expect(ping).toBeDefined();
  });

  describe("GET", () => {
    it("returns some ping text", async () => {
      // Arrange
      const req = mockRequest("GET", null);
      const res = mockResponse();

      // Act
      await ping(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ foo: "bar" });
    });
  });

  describe("Other methods", () => {
    it("returns a 405 error", async () => {
      // Arrange
      const req = mockRequest("POST", null);
      const res = mockResponse();

      // Act
      await ping(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(405);
    });
  });
});
