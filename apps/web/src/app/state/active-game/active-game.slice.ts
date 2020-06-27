import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createInitialState } from '../../common/utils/create-initial-state';
import { ActiveGameState } from './models';

export const initialState = createInitialState<ActiveGameState>({
  canShowTracksBar: true,
  isDesktopSidenavOpen: true,
  isMobileSidenavOpen: false
});

export const activeGame = createSlice({
  name: 'activeGame',
  initialState,
  reducers: {
    setSelectedTrack: (
      state,
      action: PayloadAction<{ id: string; friendlyId: string }>
    ) => {
      state.selectedTrackId = action.payload.id;
      state.selectedTrackFriendlyId = action.payload.friendlyId;
    },

    toggleIsDesktopSidenavOpen: (state, action: PayloadAction<undefined>) => {
      state.isDesktopSidenavOpen = !state.isDesktopSidenavOpen;
    },

    toggleIsMobileSidenavOpen: (state, action: PayloadAction<undefined>) => {
      state.isMobileSidenavOpen = !state.isMobileSidenavOpen;
    }
  }
});

export const activeGameActions = activeGame.actions;
