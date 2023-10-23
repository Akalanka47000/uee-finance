import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: ['Shopping', 'Food', 'Travel', 'Entertainment', 'Health', 'Education', 'Other']
};

export const slice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    setLabels(state, action) {
      state.all = action.payload;
    },
    addLabel(state, action) {
      state.all = [...state.all, action.payload];
    },
    deleteLabel(state, action) {
      state.all = state.all.filter((label) => label !== action.payload);
    }
  }
});

export const { setLabels, addLabel, deleteLabel } = slice.actions;

export default slice.reducer;
