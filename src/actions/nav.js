import { SET_VIEW, SET_SLOT_OPEN } from "./actionTypes";

export const setView = selectedView => {
  return {
    type: SET_VIEW,
    payload: {
      selectedView,
    }
  }
};

export const setSlot = (slotId, isOpen) => {
  return {
    type: SET_SLOT_OPEN,
    payload: {
      slotId,
      isOpen,
    }
  }
};