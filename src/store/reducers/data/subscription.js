import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plan: 'FREE'
};

export const slice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    }
  }
});

export const { setPlan } = slice.actions;

export default slice.reducer;
