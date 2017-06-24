import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index.js';
let intitialState = {
    currentTab: '1234567',
    tabs: {
        '1234567': [
            {
                adUnit: 'Leaderboard_1',
                adUnitPath: '123455/Leaderboard_1',
                div: 'ad-div-leaderboard',
                divExists: true,
                targeting: [
                    {
                        key: `hello`,
                        val: `world`,
                    },
                ],
            },
        ],
    },
};

const store = createStore(rootReducer, intitialState);

export default store;