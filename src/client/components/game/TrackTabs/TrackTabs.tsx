import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import {
  activeGameActions,
  selectCurrentTrack
} from 'client/state/active-game';
import { Track } from 'common/models/track.model';
import { useStyles } from './TrackTabs.styles';

interface TrackTabsProps {
  tracks: Track[];
  gameColor: string;
}

export const TrackTabs = ({ tracks, gameColor }: TrackTabsProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const currentSelectedTrack = useSelector(selectCurrentTrack);
  const classes = useStyles({ gameColor });

  const findTrackByFriendlyId = (trackFriendlyId: string) => {
    return tracks.find((t) => t.friendlyId === trackFriendlyId);
  };

  const navigateToTrackByFriendlyId = (friendlyId: string, id?: string) => {
    const trackId = id ?? findTrackByFriendlyId(friendlyId).id;

    dispatch(activeGameActions.setSelectedTrack({ friendlyId, id: trackId }));
    history.push({
      search: `?track=${friendlyId}`
    });
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
        indicator: classes.tabsIndicator
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
            root: classes.tabItemRoot
          }}
          label={track.name}
          value={track.friendlyId}
        />
      ))}
    </Tabs>
  );
};
