import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectActiveGameState } from 'client/state/active-game';
import { GameSidenav } from './GameSidenav';

// Due to the activeClassName prop always throwing an
// error on the SidenavLink component.
console.error = jest.fn();

// There are some Link components in the sidenav that rely on route params.
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    friendlyId: 'mockFriendlyId'
  })
}));

describe('Component: GameSidenav', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    const { container } = render(<GameSidenav />);

    // Assert
    expect(container).toBeDefined();
  });

  it('always has a leaderboard link', () => {
    // Arrange
    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(<GameSidenav />);
    const text = screen.getAllByText('resources.leaderboard');

    // Assert
    expect(text.length).toBeTruthy();
  });
});
