import { NowRequest, NowResponse } from "@now/node";
import * as admin from "firebase-admin";

import { firebaseAdminApp } from "./_firebaseAdmin";

const db = (firebaseAdminApp as admin.app.App).firestore();
const scoresRef = db.collection("scores");

const getGameDataFromRef = async (
  gameRef: FirebaseFirestore.DocumentReference
) => {
  const gameSnapshot = await gameRef.get();
  const gameData = await gameSnapshot.data();

  return gameData;
};

export default async (req: NowRequest, res: NowResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const scoresSnapshot = await scoresRef.limit(20).get();

        const scoresData = await Promise.all(
          scoresSnapshot.docs.map(async (doc) => {
            const {
              playerAlias,
              finalScore,
              game,
              platform,
              timeSubmitted,
            } = doc.data();

            return {
              playerAlias,
              finalScore,
              platform,
              timeSubmitted,
              id: doc.id,
              game: await getGameDataFromRef(game),
            };
          })
        );

        return res.status(200).json({
          scores: scoresData,
        });
      } catch (err) {
        return res.status(400).json({
          error: err,
        });
      }

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
