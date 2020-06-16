import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { GamePage } from './GamePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ friendlyId: 'dkong', trackId: null })
}));

describe('Page Component: GamePage', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<GamePage />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('renders the game nav bar', () => {
    // Arrange
    render(<GamePage />);

    // Assert
    expect(screen.getByTestId('game-nav-bar')).toBeVisible();
  });

  it('renders the game sidenav', () => {
    // Arrange
    render(<GamePage />);

    // Assert
    expect(screen.getByTestId('game-sidenav')).toBeVisible();
  });
});
