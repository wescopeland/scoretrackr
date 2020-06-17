import express from 'express';
import * as admin from 'firebase-admin';
import request from 'supertest';
import { exposeMockFirebaseAdminApp } from 'ts-mock-firebase';

import gameDetailsByFriendlyId from './index';

const server = express();
server.use('/game/:friendlyId', gameDetailsByFriendlyId);

const firebaseApp = admin.initializeApp({});
const mocked = exposeMockFirebaseAdminApp(firebaseApp);

describe('Api Endpoint: gameDetailsByFriendlyId', () => {
  afterEach(() => {
    mocked.firestore().mocker.reset();
  });

  it('exists', () => {
    // Assert
    expect(gameDetailsByFriendlyId).toBeDefined();
  });

  describe('GET', () => {
    it('returns a summary for a given game and its tracks', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: {
          color: 'yellow',
          friendlyId: 'dkong3',
          name: 'Donkey Kong 3'
        }
      });

      mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
        trackOne: {
          name: 'Difficulty 3 - Marathon',
          friendlyId: 'd3marathon'
        },
        trackTwo: {
          name: 'Difficulty 3 - Tournament',
          friendlyId: 'd3tgts'
        }
      });

      // Act
      const response = await request(server).get('/game/dkong3');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Donkey Kong 3');
      expect(response.body.color).toEqual('yellow');
      expect(response.body.tracks.length).toEqual(2);
      expect(response.body.tracks[0].id).toEqual('trackOne');
      expect(response.body.tracks[0].name).toEqual('Difficulty 3 - Marathon');
    });

    it('only returns the details for a single game', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: {
          color: 'red',
          friendlyId: 'dkong',
          name: 'Donkey Kong'
        },
        gameTwo: {
          color: 'red',
          friendlyId: 'dkong',
          name: 'Donkey Kong Entered By Mistake'
        }
      });

      // Act
      const response = await request(server).get('/game/dkong');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.color).toEqual('red');
      expect(response.body.name).toEqual('Donkey Kong');
    });

    it('does not crash if there are no tracks', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: {
          color: 'cyan',
          friendlyId: 'intrepid',
          name: 'Intrepid'
        }
      });

      // Act
      const response = await request(server).get('/game/intrepid');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Intrepid');
      expect(response.body.tracks.length).toEqual(0);
    });

    it('returns a 404 if the given friendlyId is not in the games collection', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: {
          color: 'purple',
          friendlyId: 'galaga',
          name: 'Galaga'
        }
      });

      mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
        trackOne: {
          name: 'Fast fire',
          friendlyId: 'ff'
        }
      });

      // Act
      const response = await request(server).get('/game/dkong3');

      // Assert
      expect(response.status).toEqual(404);
    });
  });

  describe('Other Methods', () => {
    it('returns a 405', async () => {
      // Act
      const postResponse = await request(server).post('/game/dkong3');
      const putResponse = await request(server).put('/game/dkong3');
      const deleteResponse = await request(server).put('/game/dkong3');

      // Assert
      expect(postResponse.status).toEqual(405);
      expect(putResponse.status).toEqual(405);
      expect(deleteResponse.status).toEqual(405);
    });
  });
});
