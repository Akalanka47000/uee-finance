import { combineReducers } from '@reduxjs/toolkit';
import expenses from './expenses';
import user from './user';

export default combineReducers({
  expenses,
  user
});
