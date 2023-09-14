import { combineReducers } from '@reduxjs/toolkit';
import global from './global';
import home from './home';

export default combineReducers({
  global,
  home
});
