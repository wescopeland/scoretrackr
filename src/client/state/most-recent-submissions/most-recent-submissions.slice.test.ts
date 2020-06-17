import { SubmissionBlob } from 'common/models/submission-blob.model';
import {
  initialState,
  mostRecentSubmissions
} from './most-recent-submissions.slice';
import { getMostRecentSubmissions } from './thunks/get-most-recent-submissions.thunk';

describe('Slice: mostRecentSubmissions', () => {
  it('exists', () => {
    expect(mostRecentSubmissions).toBeDefined();
  });

  it('initializes with its loading state set to true', () => {
    expect(initialState.isLoading).toEqual(true);
  });

  describe('getMostRecentSubmissions/fulfilled', () => {
    it('sets the loading state to false', () => {
      // Arrange
      const mockRecentSubmissions: SubmissionBlob[] = [];

      // Act
      const newState = mostRecentSubmissions.reducer(
        initialState,
        getMostRecentSubmissions.fulfilled(
          mockRecentSubmissions,
          undefined,
          undefined
        )
      );

      // Assert
      expect(newState.isLoading).toEqual(false);
    });

    it('updates the submission blobs in the store', () => {
      // Arrange
      const mockRecentSubmissions: SubmissionBlob[] = [
        {
          date: 'mockDate',
          submissions: [
            {
              game: {
                name: 'mockName',
                friendlyId: 'mockFriendlyId',
                color: 'mockColor'
              },
              track: {
                name: 'mockTrack'
              },
              playerAlias: 'mockPlayerAlias',
              finalScore: 100,
              position: 1
            }
          ]
        }
      ];

      // Act
      const newState = mostRecentSubmissions.reducer(
        initialState,
        getMostRecentSubmissions.fulfilled(
          mockRecentSubmissions,
          undefined,
          undefined
        )
      );

      // Assert
      expect(newState.submissionBlobs).toHaveLength(1);
      expect(newState.submissionBlobs[0].submissions[0].playerAlias).toEqual(
        'mockPlayerAlias'
      );
    });
  });
});
