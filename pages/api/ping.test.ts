import ping from "./ping";
import { NowRequest, NowResponse } from "@now/node";

export const mockRequest = (method: string, body: any): NowRequest => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  session: {},
  body,
  method
});

export const mockResponse = (): NowResponse => {
  const res: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.setHeader = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);

  return res;
};

describe("Endpoint: ping", () => {
  it("exists", () => {
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

  describe("Other method", () => {
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
