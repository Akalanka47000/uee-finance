import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showExpenseDialog: false,
  showBalanceDialog: false
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleExpenseDialog(state, action) {
      state.showExpenseDialog = action.payload;
    },
    toggleBalanceDialog(state, action) {
      state.showBalanceDialog = action.payload;
    }
  }
});

export const { toggleExpenseDialog, toggleBalanceDialog } = slice.actions;

export default slice.reducer;
