import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import * as ReactRedux from 'react-redux';

import {
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

  it('given there are no submission blobs, renders a message indicating an empty state', () => {
    // Arrange
    spyOn(ReactRedux, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectMostRecentSubmissions) {
        return [];
      }
    });

    const { getByText } = render(<MostRecentSubmissions />);

    // Assert
    expect(getByText('recentSubmissions.none')).toBeVisible();
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

    const { getByText } = render(<MostRecentSubmissions />);

    // Assert
    expect(getByText('recentSubmissions.today')).toBeVisible();
    expect(getByText('recentSubmissions.yesterday')).toBeVisible();
    expect(getByText('4 days ago')).toBeVisible();
  });
});
