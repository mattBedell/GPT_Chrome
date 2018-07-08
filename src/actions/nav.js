import { SET_VIEW, SET_SLOT_OPEN, QUICK_PANEL_TOGGLE } from './actionTypes';

export const setView = selectedView => ({
  type: SET_VIEW,
  payload: {
    selectedView,
  },
});

export const setSlot = (slotId, isOpen) => ({
  type: SET_SLOT_OPEN,
  payload: {
    slotId,
    isOpen,
  },
});

export const toggleQuickPanel = slotId => ({
  type: QUICK_PANEL_TOGGLE,
  payload: {
    slotId,
  },
});
