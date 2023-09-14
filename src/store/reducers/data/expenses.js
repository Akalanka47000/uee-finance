import { createSlice } from '@reduxjs/toolkit';
import { daysInCurrentMonth } from '@/utils';
import moment from 'moment/moment';

const initialState = {
  all: {
    [moment().format('YYYY-MM')]: Array.from({ length: daysInCurrentMonth() }, (_, index) => ({
      day: index + 1,
      full_date: moment().format(`YYYY-MM-${index + 1}`),
      amount: 0
    }))
  },
  selectedExpense: null
};

export const slice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses(state, action) {
      state.all[action.payload.month ?? moment().format('YYYY-MM')] = action.payload.data ?? action.payload ?? [];
    },
    addExpense(state, action) {
      state.all[action.payload.month ?? moment().format('YYYY-MM')] = [
        ...state.all,
        ...(action.payload.data ?? action.payload ?? [])
      ];
    },
    updateExpense(state, action) {
      const [year, month, day] = action.payload.date.split('-');
      const index = state.all[`${year}-${month}`].findIndex((expense) => expense.day === Number(day));
      state.all[`${year}-${month}`][index] = action.payload.data;
    },
    setSelectedExpense(state, action) {
      state.selectedExpense = action.payload;
    }
  }
});

export const { setExpenses, addExpense, updateExpense, setSelectedExpense } = slice.actions;

export const currentMonthExpenses = (state) => state.data.expenses.all[moment().format('YYYY-MM')];

export default slice.reducer;
