import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './base';

export const expenseApi = createApi({
  reducerPath: 'expenseApi',
  baseQuery,
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: ({ v = 'v1' } = {}) => `${v}/expenses`
    }),
    addExpense: builder.mutation({
      query: ({ v = 'v1', data }) => ({
        url: `${v}/expenses`,
        method: 'POST',
        body: data
      }),
      extraOptions: { maxRetries: 0 }
    })
  })
});

export const { useGetExpensesQuery, useAddExpenseMutation } = expenseApi;
