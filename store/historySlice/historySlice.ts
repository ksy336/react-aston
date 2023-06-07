import { createSlice } from '@reduxjs/toolkit';
import { HistoryState } from './historySlice-types';

const initialState: HistoryState = {
  moviesForHistory: [],
}
export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    saveMoviesForHistory(state, {payload}) {
      state.moviesForHistory.push([...payload]);
    },
  }
});

export const { saveMoviesForHistory } = historySlice.actions;

export default historySlice.reducer;