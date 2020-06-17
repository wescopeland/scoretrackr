import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createInitialState } from 'common/utils/create-initial-state';
import { ActiveGameState } from './models';
import { getActiveGameDetails } from './thunks';

export const initialState = createInitialState<ActiveGameState>({
  color: null,
  name: null,
  tracks: [],
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
  extraReducers: (builder) => {
    builder.addCase(getActiveGameDetails.fulfilled, (state, action) => {
      state.isLoading = false;

      state.color = action.payload.color;
      state.name = action.payload.name;
      state.tracks = action.payload.tracks;
    });

    builder.addCase(getActiveGameDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const activeGameActions = activeGame.actions;
