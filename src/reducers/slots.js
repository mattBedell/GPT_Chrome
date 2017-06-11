import { combineReducers } from 'redux';

const slots = (state = [], action) => {
    switch(action.type) {
        case 'updateSlots':
            return [...action.payload]
        default:
            return state;
    }
};

export default slots;