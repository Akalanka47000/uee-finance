import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  selectedExpense: null
};

export const slice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses(state, action) {
      state.list = action.payload;
    },
    addExpense(state, action) {
      state.list = [...state.list, ...(action.payload ?? [])];
    },
    setSelectedExpense(state, action) {
      state.selectedExpense = action.payload;
    }
  }
});

export const { setExpenses, addExpense, setSelectedExpense } = slice.actions;

export default slice.reducer;
