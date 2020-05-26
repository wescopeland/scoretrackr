/* eslint-disable @typescript-eslint/ban-ts-comment */

import { NowRequest, NowResponse } from "@now/node";

export const mockRequest = (method: string, body: any): NowRequest => ({
  // @ts-ignore
  session: {},
  body,
  method,
});

export const mockResponse = (): NowResponse => {
  const res: any = {};

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.setHeader = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);

  return res;
};
