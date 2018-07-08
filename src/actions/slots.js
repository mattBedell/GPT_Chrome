import { DEFINE_SLOT, SET_TARGETING, CLEAR_TARGETING } from './actionTypes';


export const defineSlot = (slot, tabId) => ({
  type: DEFINE_SLOT,
  payload: {
    slot,
    timestamp: slot.timestamp,
  },
  tabId,
});

export const setTargeting = (payload, tabId) => ({
  type: SET_TARGETING,
  payload: {
    targeting: payload.targeting,
    timestamp: payload.timestamp,
    slotId: payload.slotId,
  },
  tabId,
});

export const clearTargeting = (payload, tabId) => ({
  type: CLEAR_TARGETING,
  payload,
  tabId,
});
