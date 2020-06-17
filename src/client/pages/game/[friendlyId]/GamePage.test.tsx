import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import {
  selectActiveGameDetails,
  selectIsActiveGameLoading,
  selectIsDesktopSidenavOpen
} from 'client/state/active-game';
import { GamePage } from './GamePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ friendlyId: 'dkong', trackId: null })
}));

describe('Page Component: GamePage', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameDetails) {
        return {
          game: null,
          color: null,
          tracks: []
        };
      }

      if (selector === selectIsDesktopSidenavOpen) {
        return true;
      }

      if (selector === selectIsActiveGameLoading) {
        return true;
      }
    });

    const { container } = render(<GamePage />);

    // Assert
    expect(container).toBeTruthy();
    expect(screen.getByTestId('game-nav-bar')).toBeVisible();
    expect(screen.getByTestId('game-sidenav')).toBeVisible();
  });
});
