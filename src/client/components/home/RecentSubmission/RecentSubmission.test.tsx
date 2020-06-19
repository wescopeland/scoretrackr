import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { RecentSubmission } from './RecentSubmission';

describe('Component: RecentSubmission', () => {
  beforeEach(() => {
    render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );
  });

  afterEach(cleanup);

  it('shows the game name text', () => {
    // Assert
    expect(screen.getByText('Donkey Kong')).toBeVisible();
  });

  it('shows the track name text', () => {
    // Assert
    expect(screen.getByText('Factory settings')).toBeVisible();
  });

  it('shows the score text as a formatted number', () => {
    // Assert
    expect(screen.getByText('1,230,000')).toBeVisible();
  });

  it('shows the player name', () => {
    // Assert
    expect(screen.getByText('Justin Elliott')).toBeVisible();
  });

  it('shows the position as an ordinal number', () => {
    // Assert
    expect(screen.getByText('3rd')).toBeVisible();
  });
});
