import { combineReducers } from 'redux';

function updateTargeting(slotObj, action) {
  let targeting = [...slotObj.targeting, action.payload.targObj];
  return Object.assign({}, slotObj, { targeting });
};



export const slots = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_SLOTS':
    return [...state, ...action.payload]

    case 'CLEAR_SLOTS':
    return state.filter(slot => slot.tabId !== action.tabId);

    case 'UPDATE_SLOT_TARGS':
    return state.map(slot => {
      if(slot.slotIdent === action.payload.slotIdent) return updateTargeting(slot, action);
      return slot;
    })
    break;
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