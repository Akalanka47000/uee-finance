import { combineReducers } from '@reduxjs/toolkit';
import budgets from './budgets';
import expenses from './expenses';
import subscription from './subscription';
import user from './user';

export default combineReducers({
  budgets,
  expenses,
  subscription,
  user
});
