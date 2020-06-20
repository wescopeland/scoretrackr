import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { Leaderboard } from './Leaderboard';

describe('Component: Leaderboard', () => {
  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<Leaderboard />);

    // Assert
    expect(container).toBeTruthy();
  });
});
