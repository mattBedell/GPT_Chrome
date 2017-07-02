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