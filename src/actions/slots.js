import { DEFINE_SLOT, SET_TARGETING, CLEAR_TARGETING, } from './actionTypes';


export const defineSlot = (slot, tabId) => {
  return {
    type: DEFINE_SLOT,
    payload: {
      slot,
      timestamp: slot.timestamp,
    },
    tabId,
  }
};

export const setTargeting = (payload, tabId) => {
  return {
    type: SET_TARGETING,
    payload: {
      targeting: payload.targeting,
      timestamp: payload.timestamp,
      slotId: payload.slotId,
    },
    tabId,
  }
};

export const clearTargeting = (payload, tabId) => {
  return {
    type: CLEAR_TARGETING,
    payload,
    tabId,
  }
};
