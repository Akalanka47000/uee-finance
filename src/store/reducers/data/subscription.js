import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plan: 'FREE',
  paid: false
};

export const slice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setPaid(state, action) {
      state.paid = action.payload;
    }
  }
});

export const { setPlan, setPaid } = slice.actions;

export default slice.reducer;
