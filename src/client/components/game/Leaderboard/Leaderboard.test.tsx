import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import * as GraphqlHooksModule from 'graphql-hooks';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectCurrentTrack } from 'client/state/active-game';
import { Leaderboard } from './Leaderboard';

describe('Component: Leaderboard', () => {
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
    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: false,
      error: null,
      data: { trackLeaderboard: [] }
    });

    const { container } = render(<Leaderboard />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays loading text if the leaderboard is loading', () => {
    // Arrange
    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: true,
      error: null,
      data: {}
    });

    render(<Leaderboard />);

    // Assert
    expect(screen.getByText('loading')).toBeVisible();
  });

  it('displays got records text if some records are returned', () => {
    // Arrange
    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: false,
      error: null,
      data: { trackLeaderboard: ['element'] }
    });

    render(<Leaderboard />);

    // Assert
    expect(screen.getByText('got records')).toBeVisible();
  });

  it('displays an empty state if no records are returned', () => {
    // Arrange
    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: false,
      error: null,
      data: { trackLeaderboard: [] }
    });

    render(<Leaderboard />);

    // Assert
    expect(screen.getByText('leaderboard.none.heading')).toBeVisible();
  });
});
