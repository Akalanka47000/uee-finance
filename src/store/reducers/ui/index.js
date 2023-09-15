import { combineReducers } from '@reduxjs/toolkit';
import budgets from './budgets';
import global from './global';
import home from './home';

export default combineReducers({
  budgets,
  global,
  home
});
