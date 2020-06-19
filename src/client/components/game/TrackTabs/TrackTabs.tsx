import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

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
  const classes = useStyles({ gameColor });
  const [currentSelectedTrackId, setCurrentSelectedTrackId] = useState<string>(
    null
  );

  useEffect(() => {
    if (initialTrackId && tracks.find((t) => t.id === initialTrackId)) {
      setCurrentSelectedTrackId(initialTrackId);
    } else if (tracks.length) {
      setCurrentSelectedTrackId(tracks[0].id);
    }
  }, []);

  const handleTabChange = (
    e: React.ChangeEvent<{}>,
    newSelectedTrackId: string
  ) => {
    setCurrentSelectedTrackId(newSelectedTrackId);
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
