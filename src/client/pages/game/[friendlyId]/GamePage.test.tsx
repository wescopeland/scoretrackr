import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import * as GraphqlHooksModule from 'graphql-hooks';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectIsDesktopSidenavOpen } from 'client/state/active-game';
import { GamePage } from './GamePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ friendlyId: 'dkong', trackId: null })
}));

describe('Page Component: GamePage', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectIsDesktopSidenavOpen) {
        return true;
      }
    });

    spyOn(GraphqlHooksModule, 'useQuery').and.returnValue({
      loading: true,
      data: { game: {} }
    });

    const { container } = render(<GamePage />);

    // Assert
    expect(container).toBeTruthy();
    expect(screen.getByTestId('game-nav-bar')).toBeVisible();
    expect(screen.getByTestId('game-sidenav')).toBeVisible();
  });
});
