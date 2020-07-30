import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';
import * as SwrModule from 'swr';

import { selectCurrentTrack } from '~/state/active-game';
import { LeaderboardOutlet } from './LeaderboardOutlet';

jest.mock('~/components/game/Leaderboard', () => ({
  Leaderboard: () => <p>got records</p>
}));

describe('Component: LeaderboardOutlet', () => {
  beforeEach(() => {
    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectCurrentTrack) {
        return {
          id: 'mockId',
          friendlyId: 'mockFriendlyId'
        };
      }
    });
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    spyOn(SwrModule, 'default').and.returnValue({
      error: null,
      data: []
    });

    const { container } = render(<LeaderboardOutlet />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays loading text if the leaderboard is loading', () => {
    // Arrange
    spyOn(SwrModule, 'default').and.returnValue({
      error: null,
      data: undefined
    });

    render(<LeaderboardOutlet />);

    // Assert
    expect(screen.getByText('loading')).toBeVisible();
  });

  it('displays the track leaderboard if records are returned', () => {
    // Arrange
    spyOn(SwrModule, 'default').and.returnValue({
      error: null,
      data: ['element']
    });

    render(<LeaderboardOutlet />);

    // Assert
    expect(screen.getByText('got records')).toBeVisible();
  });

  it('displays an empty state if no records are returned', () => {
    // Arrange
    spyOn(SwrModule, 'default').and.returnValue({
      error: null,
      data: []
    });

    render(<LeaderboardOutlet />);

    // Assert
    expect(screen.getByText('leaderboard.none.heading')).toBeVisible();
  });
});
