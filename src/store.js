import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index.js';

const initialState = {
    slots: [{
            name: 'slot_1'
        },
        {
            name: 'slot_2'
        },
        {
            name: 'slot_3'
        }
    ]
};

const store = createStore(rootReducer, initialState);

export default store;