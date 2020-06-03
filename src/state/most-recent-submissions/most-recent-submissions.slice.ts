import { createSlice } from '@reduxjs/toolkit';

import { createInitialState } from 'utils/create-initial-state';
import { MostRecentSubmissionsState } from './models';

const initialState = createInitialState<MostRecentSubmissionsState>({
  submissionBlobs: []
});

export const mostRecentSubmissions = createSlice({
  name: 'mostRecentSubmissions',
  initialState,
  reducers: {},
  extraReducers: {}
});

export const mostRecentSubmissionsActions = mostRecentSubmissions.actions;
