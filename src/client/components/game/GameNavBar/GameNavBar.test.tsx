import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { GameNavBar } from './GameNavBar';

describe('Component: GameNavBar', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    render(<GameNavBar />);

    // Assert
    expect(screen.getByTestId('game-nav-bar')).toBeVisible();
  });

  it('contains a game picker', () => {
    // Arrange
    render(<GameNavBar />);

    // Assert
    expect(screen.getByRole('button')).toHaveTextContent('Donkey Kong');
  });
});
