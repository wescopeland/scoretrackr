import { createSlice } from '@reduxjs/toolkit';

import { createInitialState } from 'common/utils/create-initial-state';
import { MostRecentSubmissionsState } from './models';
import { getMostRecentSubmissions } from './thunks/get-most-recent-submissions.thunk';

const initialState = createInitialState<MostRecentSubmissionsState>({
  submissionBlobs: []
});

export const mostRecentSubmissions = createSlice({
  name: 'mostRecentSubmissions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMostRecentSubmissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.submissionBlobs = action.payload;
    });
  }
});

export const mostRecentSubmissionsActions = mostRecentSubmissions.actions;
