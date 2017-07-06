import { combineReducers } from 'redux';

function updateTargeting(slotObj, action) {
  let targeting = [...slotObj.targeting, action.payload.targObj];
  return Object.assign({}, slotObj, { targeting });
};
function updateSlotRefresh(state, action) {
  if(action.payload.whichSlots === 'ALL') {
    return state.map(slot => {
      slot.isRefreshed += 1;
      return slot;
    })
  }
  // TODO - CHANGE NESTED LOOP
  let stateToUpdate = state.map(slot => slot);
  action.payload.whichSlots.forEach(slotIdent => {
    stateToUpdate.forEach(slot => {
      if(slot.slotIdent === slotIdent) {
        slot.isRefreshed += 1;
      }
    })
  });
  return stateToUpdate;
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
    });
    case 'UPDATE_SLOT_REFRESH':
    return updateSlotRefresh(state, action);
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