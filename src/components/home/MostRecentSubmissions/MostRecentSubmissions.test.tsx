import { Game, Track } from '@prisma/client';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { SubmissionBlobScore } from '~/models/submission-blob-score.model';
import { SubmissionBlob } from '~/models/submission-blob.model';
import { MostRecentSubmissions } from './MostRecentSubmissions';

describe('Component: MostRecentSubmissions', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<MostRecentSubmissions submissions={[]} />);

    // Assert
    expect(container).toBeVisible();
  });

  describe('Loading', () => {
    it('given the page is loading, renders a recent submission in the loading state', () => {
      // Arrange
      render(<MostRecentSubmissions submissions={undefined} />);

      // Assert
      expect(screen.getByTestId('recent-submission-loading')).toBeVisible();
    });
  });

  describe('Hydrated', () => {
    it('does not display loading state', () => {
      // Arrange
      render(<MostRecentSubmissions submissions={[]} />);

      // Assert
      expect(screen.queryByTestId('recent-submission-loading')).toBeNull();
    });

    it('given there are no submission blobs, renders a message indicating an empty state', () => {
      // Arrange
      render(<MostRecentSubmissions submissions={[]} />);

      // Assert
      expect(screen.getByText('recentSubmissions.none.label')).toBeVisible();
    });

    it('given there are three submission blobs, renders three separate chunks of submissions', () => {
      // Arrange
      const mockGame: Partial<Game> = {
        name: 'Galaga',
        color: 'purple',
        id: 'galaga'
      };

      const mockTrack: Partial<Track> = {
        id: '1',
        name: 'Factory settings',
        friendlyId: 'factorySettings'
      };

      const mockSubmission: SubmissionBlobScore = {
        game: mockGame,
        track: mockTrack,
        playerAlias: 'Wilhelm Scream',
        finalScore: 999999,
        position: 1
      };

      const mockSubmissionBlobs: SubmissionBlob[] = [
        {
          date: '2020-06-02T11:22:51.993Z',
          submissions: [mockSubmission]
        },
        {
          date: '2020-06-01T11:22:51.993Z',
          submissions: [mockSubmission]
        },
        {
          date: '2020-05-30T01:22:51.993Z',
          submissions: [mockSubmission]
        }
      ];

      spyOn(global.Date, 'now').and.returnValue(
        new Date('2020-06-02T22:01:58.135Z')
      );

      render(<MostRecentSubmissions submissions={mockSubmissionBlobs} />);

      // Assert
      expect(screen.getByText('dates.today')).toBeVisible();
      expect(screen.getByText('4 days ago')).toBeVisible();
    });
  });
});
