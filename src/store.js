import { createStore, compose, combineReducers } from 'redux';
import rootReducer, { bgStore, appStore } from './reducers/index.js';

export default createStore(rootReducer);