import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showExpenseDialog: false
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleExpenseDialog(state, action) {
      state.showExpenseDialog = action.payload;
    }
  }
});

export const { toggleExpenseDialog } = slice.actions;

export default slice.reducer;
