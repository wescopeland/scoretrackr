import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  activeGameActions,
  selectCurrentTrackId
} from 'client/state/active-game';
import { Track } from 'common/models/track.model';
import { useStyles } from './TrackTabs.styles';

interface TrackTabsProps {
  tracks: Track[];
  gameColor: string;
  initialTrackId?: string;
}

export const TrackTabs = ({
  tracks,
  gameColor,
  initialTrackId
}: TrackTabsProps) => {
  const dispatch = useDispatch();
  const currentSelectedTrackId = useSelector(selectCurrentTrackId);
  const classes = useStyles({ gameColor });

  useEffect(() => {
    if (initialTrackId && tracks.find((t) => t.id === initialTrackId)) {
      dispatch(activeGameActions.setSelectedTrackId(initialTrackId));
    } else if (tracks.length) {
      dispatch(activeGameActions.setSelectedTrackId(tracks[0].id));
    }
  }, []);

  const handleTabChange = (
    e: React.ChangeEvent<{}>,
    newSelectedTrackId: string
  ) => {
    dispatch(activeGameActions.setSelectedTrackId(newSelectedTrackId));
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
          value={track.id}
        />
      ))}
    </Tabs>
  );
};
