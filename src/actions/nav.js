import { SET_VIEW, SET_SLOT } from "./actionTypes";

export const setView = selectedView => {
  return {
    type: SET_VIEW,
    payload: {
      selectedView,
    }
  }
};

export const setSlot = selectedSlot => {
  return {
    type: SET_SLOT,
    payload: {
      selectedSlot,
    }
  }
};