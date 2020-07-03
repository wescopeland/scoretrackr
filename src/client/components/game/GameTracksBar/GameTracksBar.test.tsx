import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectActiveGameState } from 'client/state/active-game';
import { TrackEntity } from 'common/entities';
import { GameTracksBar } from './GameTracksBar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  }),
  useLocation: () => ({
    search: ''
  })
}));

const trackOne = new TrackEntity();
trackOne.id = 'trackOne';
trackOne.name = 'Unpopular Track';
trackOne.friendlyId = 'friendlyTrackOne';
trackOne.submissionCount = 1;

const trackTwo = new TrackEntity();
trackTwo.id = 'trackTwo';
trackTwo.name = 'Very Popular Track';
trackTwo.friendlyId = 'friendlyTrackTwo';
trackTwo.submissionCount = 999;

const trackThree = new TrackEntity();
trackThree.id = 'trackThree';
trackThree.name = 'ZZZ Unpopular Track';
trackThree.friendlyId = 'friendlyTrackThree';
trackThree.submissionCount = 1;

const trackFour = new TrackEntity();
trackFour.id = 'trackFour';
trackFour.name = 'AAA Unpopular Track';
trackFour.friendlyId = 'friendlyTrackFour';
trackFour.submissionCount = 1;

const mockTracks: TrackEntity[] = [trackOne, trackTwo, trackThree, trackFour];

describe('Component: GameTracksBar', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    const { container } = render(<GameTracksBar isLoading={true} />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays a loading skeleton when the loading prop is set to true', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(<GameTracksBar isLoading={true} />);

    // Assert
    expect(screen.getByTestId('track-tabs-loading')).toBeVisible();
  });

  it('displays the track tabs when the loading prop is set to false', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(
      <GameTracksBar isLoading={false} gameColor="red" tracks={mockTracks} />
    );

    // Assert
    expect(screen.getByRole('tablist')).toBeVisible();
  });

  it('sorts the track tabs by submission count', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(
      <GameTracksBar isLoading={false} gameColor="red" tracks={mockTracks} />
    );

    const tabItems = screen.getAllByRole('tab');
    const firstTab = tabItems[0];
    const secondTab = tabItems[1];

    // Assert
    expect(firstTab.textContent).toEqual('Very Popular Track');
    expect(secondTab.textContent).toEqual('AAA Unpopular Track');
  });

  it('does secondary sorting of tracks by their name if they have the same submission count', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(
      <GameTracksBar isLoading={false} gameColor="red" tracks={mockTracks} />
    );

    const tabItems = screen.getAllByRole('tab');
    const firstTab = tabItems[0];
    const secondTab = tabItems[1];
    const thirdTab = tabItems[2];
    const fourthTab = tabItems[3];

    // Assert
    expect(firstTab.textContent).toEqual('Very Popular Track');
    expect(secondTab.textContent).toEqual('AAA Unpopular Track');
    expect(thirdTab.textContent).toEqual('Unpopular Track');
    expect(fourthTab.textContent).toEqual('ZZZ Unpopular Track');
  });
});
