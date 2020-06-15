import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { GameSidenav } from './GameSidenav';

describe('Component: GameSidenav', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<GameSidenav />);

    // Assert
    expect(container).toBeDefined();
  });

  it('always has a leaderboard link', () => {
    // Arrange
    render(<GameSidenav />);
    const text = screen.getAllByText('resources.leaderboard');

    // Assert
    expect(text.length).toBeTruthy();
  });
});
