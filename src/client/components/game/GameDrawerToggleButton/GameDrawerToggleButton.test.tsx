import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { GameDrawerToggleButton } from './GameDrawerToggleButton';

describe('Component: GameDrawerToggleButton', () => {
  it('renders without crashing', () => {
    // Arrange
    render(<GameDrawerToggleButton />);

    // Assert
    expect(screen.getByRole('button')).toBeVisible();
  });
});
