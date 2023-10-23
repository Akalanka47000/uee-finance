import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [],
  selectedBudget: null
};

export const slice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    setBudgets(state, action) {
      state.all = action.payload;
    },
    addBudget(state, action) {
      state.all = [...state.all, action.payload];
    },
    updateBudget(state, action) {
      const index = state.all.findIndex((budget) => budget.id === action.payload.id);
      state.all[index] = action.payload;
    },
    deleteBudget(state, action) {
      state.all = state.all.filter((budget) => budget.id !== action.payload.id);
    },
    setSelectedBudget(state, action) {
      state.selectedBudget = action.payload;
    }
  }
});

export const { setBudgets, addBudget, updateBudget, deleteBudget, setSelectedBudget } = slice.actions;

export default slice.reducer;
