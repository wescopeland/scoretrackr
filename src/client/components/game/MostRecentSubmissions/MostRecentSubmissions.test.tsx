import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactRedux from 'react-redux';

import {
  selectIsMostRecentSubmissionsLoading,
  selectMostRecentSubmissions,
  Submission,
  SubmissionBlob
} from 'client/state/most-recent-submissions';
import { Game } from 'client/state/shared-models';
import { MostRecentSubmissions } from './MostRecentSubmissions';

describe('Component: MostRecentSubmissions', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectMostRecentSubmissions) {
        return [];
      }
    });

    const { container } = render(<MostRecentSubmissions />);

    // Assert
    expect(container).toBeVisible();
  });

  describe('Loading', () => {
    it('given the page is loading, renders a recent submission in the loading state', () => {
      // Arrange
      spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectIsMostRecentSubmissionsLoading) {
          return true;
        }
      });

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByTestId('recent-submission-loading')).toBeVisible();
    });
  });

  describe('Hydrated', () => {
    it('does not display loading state', () => {
      // Arrange
      spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectMostRecentSubmissions) {
          return [];
        }

        if (selector === selectIsMostRecentSubmissionsLoading) {
          return false;
        }

        render(<MostRecentSubmissions />);

        // Assert
        expect(
          screen.getByTestId('recent-submission-loading')
        ).not.toBeVisible();
      });
    });

    it('given there are no submission blobs, renders a message indicating an empty state', () => {
      // Arrange
      spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectMostRecentSubmissions) {
          return [];
        }
      });

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByText('recentSubmissions.none.label')).toBeVisible();
    });

    it('given there are three submission blobs, renders three separate chunks of submissions', () => {
      // Arrange
      const mockGame: Game = {
        name: 'Galaga',
        color: 'purple',
        friendlyId: 'galaga'
      };

      const mockSubmission: Submission = {
        game: mockGame,
        track: 'Fast fire',
        playerAlias: 'Wilhelm Scream',
        score: 999999,
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

      spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectMostRecentSubmissions) {
          return mockSubmissionBlobs;
        }
      });

      spyOn(global.Date, 'now').and.returnValue(
        new Date('2020-06-02T22:01:58.135Z')
      );

      render(<MostRecentSubmissions />);

      // Assert
      expect(screen.getByText('recentSubmissions.today')).toBeVisible();
      expect(screen.getByText('recentSubmissions.yesterday')).toBeVisible();
      expect(screen.getByText('4 days ago')).toBeVisible();
    });
  });
});