import { RootState } from '../store';

export const selectScrollY = (state: RootState) => state.scroll.scrollY;
