import { combineReducers } from '@reduxjs/toolkit';
import budgets from './budgets';
import global from './global';
import home from './home';
import labels from './labels';

export default combineReducers({
  budgets,
  global,
  home,
  labels
});
