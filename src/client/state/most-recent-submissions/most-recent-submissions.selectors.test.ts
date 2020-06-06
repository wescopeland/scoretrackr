import { AppState } from '../reducer';
import { SubmissionBlob } from './models';
import {
  selectIsLoading,
  selectMostRecentSubmissions
} from './most-recent-submissions.selectors';

describe('Selectors: mostRecentSubmissions', () => {
  describe('Selector: selectIsLoading', () => {
    it('returns the isLoading value from the store', () => {
      // Arrange
      const mockValue = true;

      const mockState: Partial<AppState> = {
        mostRecentSubmissions: {
          isLoading: mockValue
        } as any
      };

      // Act
      const selected = selectIsLoading(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectMostRecentSubmissions', () => {
    it('returns the submissionBlobs value from the store', () => {
      // Arrange
      const mockValue: SubmissionBlob[] = [
        {
          date: 'mockDate',
          submissions: [
            {
              game: {
                name: 'mockName',
                friendlyId: 'mockFriendlyId',
                color: 'mockColor'
              },
              track: 'mockTrack',
              playerAlias: 'mockPlayerAlias',
              score: 100,
              position: 1
            }
          ]
        }
      ];

      const mockState: Partial<AppState> = {
        mostRecentSubmissions: {
          submissionBlobs: mockValue
        } as any
      };

      // Act
      const selected = selectMostRecentSubmissions(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });
});
