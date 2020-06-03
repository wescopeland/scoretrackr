import { Request, Response } from 'express';

import { firestore } from '../../firebase-admin-app';

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'GET':
      const scoresSnapshot = await firestore.collection('scores').get();

      let scores: any[] = [];
      scoresSnapshot.forEach((score) => {
        scores.push(score.data());
      });

      console.log(scores);

      return res.status(200).json({ scores });

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
