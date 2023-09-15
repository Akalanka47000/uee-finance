import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showBudgetDialog: false
};

export const slice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    toggleBudgetDialog(state, action) {
      state.showBudgetDialog = action.payload;
    }
  }
});

export const { toggleBudgetDialog } = slice.actions;

export default slice.reducer;
