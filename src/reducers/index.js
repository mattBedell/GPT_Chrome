import { combineReducers } from 'redux';

import tabs from './chrome';
import nav from './nav';
import { popup } from './popup';





export default combineReducers({
  tabs,
  popup,
  nav,
});
