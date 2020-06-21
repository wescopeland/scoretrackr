import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from 'client/state/store';
import { Track } from 'common/models/track.model';
import { TrackTabs } from './TrackTabs';

let mockUseLocationValue: any;

// Disable the global mock found in __mocks__.
jest.unmock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockUseLocationValue,
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('Component: TrackTabs', () => {
  beforeEach(() => {
    mockUseLocationValue = undefined;
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'Friendly Track One',
        submissionCount: 5
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs tracks={mockTracks} gameColor="red" />
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
    mockUseLocationValue = {
      search: '?track=trackTwo'
    };

    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'trackOne',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'trackTwo',
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
      'Track Two'
    );
  });

  it('selects the first tab if a track id is given but not found', () => {
    // Arrange
    mockUseLocationValue = {
      search: '?track=trackThree'
    };

    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'trackOne',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'trackTwo',
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

  it('navigates to the track clicked on by the user', () => {
    // Arrange
    const store = configureStore();

    const mockTracks: Track[] = [
      {
        id: 'mockId1',
        name: 'Track One',
        friendlyId: 'trackOne',
        submissionCount: 5
      },
      {
        id: 'mockId2',
        name: 'Track Two',
        friendlyId: 'trackTwo',
        submissionCount: 1
      }
    ];

    render(
      <ReduxProvider store={store}>
        <TrackTabs tracks={mockTracks} gameColor="red" />
      </ReduxProvider>
    );

    // Act
    const trackTwoTab = screen.getAllByRole('tab')[1];
    userEvent.click(trackTwoTab);

    // Assert
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Track Two'
    );
  });
});
