import { combineReducers } from '@reduxjs/toolkit';
import budgets from './budgets';
import expenses from './expenses';
import labels from './labels';
import subscription from './subscription';
import user from './user';

export default combineReducers({
  budgets,
  expenses,
  labels,
  subscription,
  user
});
