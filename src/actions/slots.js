export const updateSlots = (payload, tabId) => {
  return {
    type: 'UPDATE_SLOTS',
    payload,
    tabId,
  }
};

export const clearSlots = (tabId) => {
  return {
    type: 'CLEAR_SLOTS',
    tabId
  }
}

export const updateSlotTargs = payload => {
  return {
    type: 'UPDATE_SLOT_TARGS',
    payload
  }
}