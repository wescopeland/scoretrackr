import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import * as GraphqlHooksModule from 'graphql-hooks';
import React from 'react';

import { Game, Score, Track } from '@scoretrackr/data-access-entities';
import { SubmissionBlob } from '@scoretrackr/data-access-common-models';
import { MostRecentSubmissions } from './MostRecentSubmissions';

describe('Component: MostRecentSubmissions', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: false,
      error: null,
      data: { recentSubmissions: [] }
    });

    const { container } = render(<MostRecentSubmissions />);

    // Assert
    expect(container).toBeVisible();
  });

  describe('Loading', () => {
    it('given the page is loading, renders a recent submission in the loading state', () => {
      // Arrange
      spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
        loading: true,
        error: null,
        data: { recentSubmissions: null }
      });

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByTestId('recent-submission-loading')).toBeVisible();
    });
  });

  describe('Hydrated', () => {
    it('does not display loading state', () => {
      // Arrange
      spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
        loading: false,
        error: null,
        data: { recentSubmissions: [] }
      });

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.queryByTestId('recent-submission-loading')).toBeNull();
    });

    it('given there are no submission blobs, renders a message indicating an empty state', () => {
      // Arrange
      spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
        loading: false,
        error: null,
        data: { recentSubmissions: [] }
      });

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByText('recentSubmissions.none.label')).toBeVisible();
    });

    it('given there are three submission blobs, renders three separate chunks of submissions', () => {
      // Arrange
      const mockGame = new Game();
      mockGame.name = 'Galaga';
      mockGame.color = 'purple';
      mockGame.id = 'galaga';

      const mockTrack = new Track();
      mockTrack.name = 'Fast fire';

      const mockSubmission: Partial<Score> = {
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

      spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
        loading: false,
        error: null,
        data: { recentSubmissions: mockSubmissionBlobs }
      });

      spyOn(global.Date, 'now').and.returnValue(
        new Date('2020-06-02T22:01:58.135Z')
      );

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByText('dates.today')).toBeVisible();
      expect(screen.getByText('dates.yesterday')).toBeVisible();
      expect(screen.getByText('4 days ago')).toBeVisible();
    });
  });
});
