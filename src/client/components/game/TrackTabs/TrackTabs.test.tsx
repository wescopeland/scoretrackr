import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from 'client/state/store';
import { Track } from 'common/models/track.model';
import { TrackTabs } from './TrackTabs';

// Disable the global mock found in __mocks__.
jest.unmock('react-redux');

describe('Component: TrackTabs', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const store = configureStore();

    render(
      <ReduxProvider store={store}>
        <TrackTabs tracks={[]} gameColor="red" />
      </ReduxProvider>
    );

    // Assert
    expect(screen.getByRole('tablist')).toBeVisible();
  });

  it('displays an input list of tracks as tabs', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'Friendly Track One',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'Friendly Track Two',
        submissionCount: 1
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs tracks={mockTracks} gameColor="red" />
      </ReduxProvider>
    );

    // Assert
    expect(screen.getAllByRole('tab')).toHaveLength(2);
    expect(screen.getByText('Track One')).toBeVisible();
    expect(screen.getByText('Track Two')).toBeVisible();
  });

  it('sets the first tab in the list to be selected if there is no given initialTrackId', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'Friendly Track One',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'Friendly Track Two',
        submissionCount: 1
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs tracks={mockTracks} gameColor="red" />
      </ReduxProvider>
    );

    // Assert
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Track One'
    );
  });

  it('sets a specific track to be initially selected if given that track id as a prop', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'Friendly Track One',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'Friendly Track Two',
        submissionCount: 1
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs
          tracks={mockTracks}
          gameColor="red"
          initialTrackId="mockId2"
        />
      </ReduxProvider>
    );

    // Assert
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Track Two'
    );
  });

  it('selects the first tab if a track id is given but not found', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'Friendly Track One',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'Friendly Track Two',
        submissionCount: 1
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs
          tracks={mockTracks}
          gameColor="red"
          initialTrackId="mockId23333"
        />
      </ReduxProvider>
    );

    // Assert
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Track One'
    );
  });
});
