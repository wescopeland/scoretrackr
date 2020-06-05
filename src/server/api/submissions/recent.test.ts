import express from 'express';
import * as admin from 'firebase-admin';
import request from 'supertest';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import recentSubmissions from './recent';

const server = express();
server.use('/recentSubmissions', recentSubmissions);

const app = admin.initializeApp({});
const mocked = exposeMockFirebaseAdminApp(app);

const mockGameOne = {
  color: 'red',
  friendlyId: 'gameOne',
  name: 'Game One'
};

const mockGameTwo = {
  color: 'blue',
  friendlyId: 'gameTwo',
  name: 'Game Two'
};

const mockTrack = {
  name: 'Factory settings'
};

describe('Api Endpoint: recentSubmissions', () => {
  afterEach(() => {
    mocked.firestore().mocker.reset();
  });

  it('exists', () => {
    // Assert
    expect(recentSubmissions).toBeDefined();
  });

  describe('GET', () => {
    it('returns an array of submission blobs', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: mockGameOne,
        gameTwo: mockGameTwo
      });

      mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('games/gameTwo/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('scores', {
        scoreOne: {
          _gameRef: mocked.firestore().doc('games/gameOne'),
          _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
          playerAlias: 'Steve Wiebe',
          finalScore: 1190400,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1494153123, 0)
        },
        scoreTwo: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'Wes Copeland',
          finalScore: 1218000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1493153123, 0)
        }
      });

      // Act
      const response = await request(server).get('/recentSubmissions');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0].date).toBeTruthy();
      expect(response.body[0].submissions).toHaveLength(1);
      expect(response.body[0].submissions[0]).toEqual({
        game: mockGameOne,
        track: 'Factory settings',
        playerAlias: 'Steve Wiebe',
        score: 1190400,
        position: 5
      });
    });

    it('returns an empty array if there are no scores present in the database', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: mockGameOne,
        gameTwo: mockGameTwo
      });

      // Act
      const response = await request(server).get('/recentSubmissions');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([]);
    });

    it('adds multiple submissions from the same day to a single submission blob', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: mockGameOne,
        gameTwo: mockGameTwo
      });

      mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('games/gameTwo/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('scores', {
        scoreOne: {
          _gameRef: mocked.firestore().doc('games/gameOne'),
          _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
          playerAlias: 'Steve Wiebe',
          finalScore: 1190400,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1494153123, 0)
        },
        scoreTwo: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'Wes Copeland',
          finalScore: 1218000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1493153123, 0)
        },
        scoreThree: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'John Doe',
          finalScore: 1230000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1493153999, 0)
        }
      });

      // Act
      const response = await request(server).get('/recentSubmissions');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0].submissions).toHaveLength(1);
      expect(response.body[1].submissions).toHaveLength(2);
    });

    it('only returns a maximum of three submission blobs', async () => {
      // Arrange
      mocked.firestore().mocker.loadCollection('games', {
        gameOne: mockGameOne,
        gameTwo: mockGameTwo
      });

      mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('games/gameTwo/tracks', {
        trackOne: mockTrack
      });

      mocked.firestore().mocker.loadCollection('scores', {
        scoreOne: {
          _gameRef: mocked.firestore().doc('games/gameOne'),
          _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
          playerAlias: 'Steve Wiebe',
          finalScore: 1190400,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1494153123, 0)
        },
        scoreTwo: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'Wes Copeland',
          finalScore: 1218000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1493153123, 0)
        },
        scoreThree: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'John Doe',
          finalScore: 1230000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1593153999, 0)
        },
        scoreFour: {
          _gameRef: mocked.firestore().doc('games/gameTwo'),
          _trackRef: mocked.firestore().doc('games/gameTwo/tracks/trackOne'),
          playerAlias: 'James Doe',
          finalScore: 1240000,
          platform: 'Arcade PCB',
          submittedAt: new MockTimestamp(1693153999, 0)
        }
      });

      // Act
      const response = await request(server).get('/recentSubmissions');

      // Assert
      expect(response.status).toEqual(200);
      expect(response.body).toHaveLength(3);
    });
  });

  describe('Other Methods', () => {
    it('returns a 405', async () => {
      // Act
      const postResponse = await request(server).post('/recentSubmissions');
      const putResponse = await request(server).put('/recentSubmissions');
      const deleteResponse = await request(server).delete('/recentSubmissions');

      // Assert
      expect(postResponse.status).toEqual(405);
      expect(putResponse.status).toEqual(405);
      expect(deleteResponse.status).toEqual(405);
    });
  });
});
