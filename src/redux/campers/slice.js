import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCamper } from './operations';

const initialState = {
  items: [],
  camperDetails: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCamper.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.camperDetails = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default slice.reducer;
