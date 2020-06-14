import { Tab, Tabs } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { LeaderboardTabsLoadingSkeleton } from '../LeaderboardTabsLoadingSkeleton';
import { useStyles } from './LeaderboardTabs.styles';

interface LeaderboardTabsProps {
  tracks: any[];
  gameColor: string;
  initialTrackId?: string;
}

export const LeaderboardTabs = ({
  tracks,
  gameColor,
  initialTrackId
}: LeaderboardTabsProps) => {
  const classes = useStyles({ gameColor });
  const [currentSelectedTrackId, setCurrentSelectedTrackId] = useState<
    string | number
  >(0);

  useEffect(() => {
    if (initialTrackId && tracks.find((t) => t.id === initialTrackId)) {
      setCurrentSelectedTrackId(initialTrackId);
    } else {
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
      {currentSelectedTrackId !== 0 ? (
        tracks.map((track) => (
          <Tab
            key={track.id}
            classes={{
              root: classes.tabItemRoot
            }}
            label={track.name}
            value={track.id}
          />
        ))
      ) : (
        <LeaderboardTabsLoadingSkeleton {...([] as any)} />
      )}
    </Tabs>
  );
};
