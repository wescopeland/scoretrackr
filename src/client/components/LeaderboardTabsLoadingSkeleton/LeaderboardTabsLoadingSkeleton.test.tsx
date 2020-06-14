import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { LeaderboardTabsLoadingSkeleton } from './LeaderboardTabsLoadingSkeleton';

describe('Component: LeaderboardTabsLoadingSkeleton', () => {
  it('renders without crashing', () => {
    // Arrange
    render(<LeaderboardTabsLoadingSkeleton {...([] as any)} />);

    // Assert
    expect(screen.getByTestId('game-tabs-loading')).toBeVisible();
  });
});
