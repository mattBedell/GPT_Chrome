import { DEFINE_SLOT, SET_TARGETING, CLEAR_TARGETING, } from './actionTypes';


export const defineSlot = (slot, tabId) => {
  return {
    type: DEFINE_SLOT,
    slot,
    tabId,
  }
};

export const setTargeting = (payload, tabId) => {
  return {
    type: SET_TARGETING,
    ...payload,
    tabId,
  }
};

export const clearTargeting = (targeting, tabId) => {
  return {
    type: CLEAR_TARGETING,
    ...payload,
    tabId,
  }
};
