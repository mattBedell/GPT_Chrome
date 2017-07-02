import { combineReducers } from 'redux';

export const slots = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_SLOTS':
    return [...state, ...action.payload]

    case 'CLEAR_SLOTS':
    return state.filter(slot => slot.tabId !== action.tabId);

    default:
    return state;
  }
};

export const getSlotsByTabId = (state, tabId) => {
  return state.slots.filter(slot => slot.tabId == tabId);
}

export const getSlots = state => {
  return state.slots;
}