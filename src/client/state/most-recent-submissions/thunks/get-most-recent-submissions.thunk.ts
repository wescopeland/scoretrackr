import { createAsyncThunk } from '@reduxjs/toolkit';

import { SubmissionBlob } from '../models';

export const getMostRecentSubmissions = createAsyncThunk(
  'mostRecentSubmissions/getMostRecentSubmissions',
  async (payload: undefined, { rejectWithValue }) => {
    const response = await globalThis.fetch('/api/submissions/recent');

    if (!response.ok) {
      return rejectWithValue(response);
    }

    return (await response.json()) as SubmissionBlob[];
  }
);
