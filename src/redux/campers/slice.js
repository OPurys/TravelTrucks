import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCamper } from './operations';

const initialState = {
  items: [],
  camperDetails: null,
  currentPage: 1,
  totalItems: 0,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        if (state.currentPage > 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.camperDetails = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchAllCampers.pending, fetchCamper.pending),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCampers.fulfilled, fetchCamper.fulfilled),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCampers.rejected, fetchCamper.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setCurrentPage } = slice.actions;
export default slice.reducer;
