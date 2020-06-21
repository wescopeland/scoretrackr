import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import {
  activeGameActions,
  selectCurrentTrackId
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
  const currentSelectedTrackId = useSelector(selectCurrentTrackId);
  const classes = useStyles({ gameColor });

  const isTrackFriendlyIdPresent = (trackFriendlyId: string) => {
    return tracks.find((t) => t.friendlyId === trackFriendlyId);
  };

  const navigateToTrackByFriendlyId = (trackFriendlyId: string) => {
    dispatch(activeGameActions.setSelectedTrackId(trackFriendlyId));
    history.push({
      search: `?track=${trackFriendlyId}`
    });
  };

  useEffect(() => {
    if (location?.search?.length) {
      const queryParams = new URLSearchParams(location.search);
      const trackFriendlyId = queryParams.get('track');

      if (trackFriendlyId && isTrackFriendlyIdPresent(trackFriendlyId)) {
        navigateToTrackByFriendlyId(trackFriendlyId);
      } else {
        navigateToTrackByFriendlyId(tracks[0].friendlyId);
      }
    } else {
      navigateToTrackByFriendlyId(tracks[0].friendlyId);
    }
  }, []);

  const handleTabChange = (
    e: React.ChangeEvent<{}>,
    newSelectedTrackId: string
  ) => {
    if (currentSelectedTrackId !== newSelectedTrackId) {
      navigateToTrackByFriendlyId(newSelectedTrackId);
    }
  };

  return (
    <Tabs
      classes={{
        root: classes.tabsRoot,
        indicator: classes.tabsIndicator
      }}
      value={currentSelectedTrackId ?? false}
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
