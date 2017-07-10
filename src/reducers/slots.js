import { combineReducers } from 'redux';

function updateSlotProps(slot, props) {
  return Object.assign({}, slot, props);
}
function updateSlotInList(state, slotIdent, updater) {
  return state.map(slot => {
    if(slot.slotIdent === slotIdent) {
      return updater(slot);
    }
    return slot;
  })
}
function updateTargeting(slotObj, newTargeting) {
  let targeting = [...slotObj.targeting, newTargeting];
  return {
    targeting
  };
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
function updateSlotRender(state, action) {

}



export const slots = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_SLOTS':
    return [...state, ...action.payload]

    case 'CLEAR_SLOTS':
    return state.filter(slot => slot.tabId !== action.tabId);

    case 'UPDATE_SLOT_TARGS':
    return updateSlotInList(state, action.payload.slotIdent, slot => {
      return updateSlotProps(slot, updateTargeting(slot, action.payload.targObj));
    })

    case 'UPDATE_SLOT_REFRESH':
    return updateSlotRefresh(state, action);

    case 'UPDATE_SLOT_RENDER':
    return updateSlotInList(state, action.payload.slotIdent, slot => {
      return updateSlotProps(slot, { renderInfo: action.payload.renderInfo });
    })

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