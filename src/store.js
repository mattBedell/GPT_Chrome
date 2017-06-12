import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

export default store;