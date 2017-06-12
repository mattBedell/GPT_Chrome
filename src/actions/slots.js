export const updateSlots = (payload, tabId) => {
    return {
        type: 'UPDATE_SLOTS',
        payload,
        tabId,
    }
};