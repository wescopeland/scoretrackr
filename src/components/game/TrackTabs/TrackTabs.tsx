import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { activeGameActions, selectCurrentTrack } from '~/state/active-game';
import { Track } from '~/entities';
import { useStyles } from './TrackTabs.styles';

interface TrackTabsProps {
  tracks: Track[];
  gameColor: string;
}

export const TrackTabs = ({ tracks, gameColor }: TrackTabsProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentSelectedTrack = useSelector(selectCurrentTrack);
  const classes = useStyles({ gameColor });

  const findTrackByFriendlyId = (trackFriendlyId: string) => {
    return tracks.find((t) => t.friendlyId === trackFriendlyId);
  };

  const navigateToTrackByFriendlyId = (friendlyId: string, id?: string) => {
    const trackId = id ?? findTrackByFriendlyId(friendlyId).id;

    dispatch(activeGameActions.setSelectedTrack({ friendlyId, id: trackId }));

    const newParams = new URLSearchParams(location.search);
    newParams.set('track', friendlyId);

    router.replace(
      {
        pathname: '/game/[friendlyId]',
        query: {
          track: friendlyId
        }
      },
      {
        pathname: '/game/dkong',
        query: {
          track: friendlyId
        }
      }
    );
  };

  useEffect(() => {
    if (location?.search?.length) {
      const queryParams = new URLSearchParams(location.search);
      const trackFriendlyId = queryParams.get('track');

      const foundTrack = findTrackByFriendlyId(trackFriendlyId);

      if (trackFriendlyId && foundTrack) {
        navigateToTrackByFriendlyId(foundTrack.friendlyId);
      } else {
        navigateToTrackByFriendlyId(tracks[0].friendlyId, tracks[0].id);
      }
    } else {
      navigateToTrackByFriendlyId(tracks[0].friendlyId, tracks[0].id);
    }
  }, []);

  const handleTabChange = (
    e: React.ChangeEvent<{}>,
    newSelectedTrackFriendlyId: string
  ) => {
    if (newSelectedTrackFriendlyId !== currentSelectedTrack.friendlyId) {
      navigateToTrackByFriendlyId(newSelectedTrackFriendlyId);
    }
  };

  return (
    <Tabs
      classes={{
        root: classes.tabsRoot,
        indicator: classes.tabsIndicator,
        scroller: classes.tabsScroller
      }}
      value={currentSelectedTrack?.friendlyId ?? false}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {tracks.map((track) => (
        <Tab
          key={track.id}
          classes={{
            root: classes.tabItemRoot,
            selected: classes.tabSelected
          }}
          label={track.name}
          value={track.friendlyId}
        />
      ))}
    </Tabs>
  );
};
