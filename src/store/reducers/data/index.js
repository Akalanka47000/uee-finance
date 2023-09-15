import { combineReducers } from '@reduxjs/toolkit';
import expenses from './expenses';
import subscription from './subscription';
import user from './user';

export default combineReducers({
  expenses,
  subscription,
  user
});
