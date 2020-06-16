import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createInitialState } from 'common/utils/create-initial-state';
import { ActiveGameState } from './models';

export const initialState = createInitialState<ActiveGameState>({
  color: null,
  name: null,
  isDesktopSidenavOpen: true,
  isMobileSidenavOpen: false
});

export const activeGame = createSlice({
  name: 'activeGame',
  initialState,
  reducers: {
    toggleIsDesktopSidenavOpen: (state, action: PayloadAction<boolean>) => {
      state.isDesktopSidenavOpen = !state.isDesktopSidenavOpen;
    },

    toggleIsMobileSidenavOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileSidenavOpen = !state.isMobileSidenavOpen;
    }
  },
  extraReducers: {}
});

export const activeGameActions = activeGame.actions;