import { Request, Response } from 'express';

import { GameDetailsResponse } from 'common/models/game-details-response.model';
import { Track } from 'common/models/track.model';
import { unallowedHttpMethodResponse } from 'common/utils/api';
import { DBGame, DBTrack } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'GET':
      const { friendlyId } = req.params;

      const gameSnapshot = await db
        .firestore()
        .collection('games')
        .where('friendlyId', '==', friendlyId)
        .limit(1)
        .get();

      let foundGameDetails: GameDetailsResponse;
      for (const gameDocument of gameSnapshot.docs) {
        const dbGame = gameDocument.data() as DBGame;

        const tracksSnapshot = await gameDocument.ref
          .collection('tracks')
          .get();

        const tracks: Track[] = [];
        for (const trackDocument of tracksSnapshot.docs) {
          const dbTrack = trackDocument.data() as DBTrack;
          tracks.push({
            friendlyId: dbTrack.friendlyId,
            name: dbTrack.name,
            id: trackDocument.id
          });
        }

        foundGameDetails = {
          tracks,
          color: dbGame.color,
          name: dbGame.name
        };
      }

      if (foundGameDetails) {
        return res.status(200).send(foundGameDetails);
      } else {
        return res.status(404).send();
      }

    default:
      return unallowedHttpMethodResponse(['GET'], req.method, res);
  }
};
