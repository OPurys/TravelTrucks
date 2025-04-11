import { RootState } from '../store';

export const selectCampers = (state: RootState) => state.campers.items;
export const selectCamperDetails = (state: RootState) =>
  state.campers.camperDetails;
export const selectParams = (state: RootState) => state.campers.params;
export const selectIsLoading = (state: RootState) => state.campers.loading;
export const selectIsError = (state: RootState) => state.campers.error;
export const selectCurrentPage = (state: RootState) =>
  state.campers.currentPage;
export const selectTotalItems = (state: RootState) => state.campers.totalItems;
