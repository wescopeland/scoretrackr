import { NowRequest, NowResponse } from "@now/node";

export default async (req: NowRequest, res: NowResponse) => {
  switch (req.method) {
    case "GET":
      return res.status(200).json({ foo: "bar" });

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
