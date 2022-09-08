import { createSlice } from '@reduxjs/toolkit';

const initialIntervalState = { interval: 5000 };

const intervalSlice = createSlice({
  name: 'interval',
  initialState: initialIntervalState,
  reducers: {
    changeInterval(state, action) {
      state.interval = action.payload;
    },
  },
});

export const intervalActions = intervalSlice.actions;

export default intervalSlice.reducer;
