import { Game, Track } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createInitialState } from '~/utils/create-initial-state';
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
    setGameDetails: (state, action: PayloadAction<Partial<Game>>) => {
      state.hexColor = action.payload.color;
      state.name = action.payload.name;
    },

    setSelectedTrack: (state, action: PayloadAction<Partial<Track>>) => {
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
