import { RENDER_ENDED } from './actionTypes';
import { SLOT } from './eventTypes';



export const renderEnded = (event, tabId) => {
  const { slotId, render, timestamp } = event;
  return {
    type: RENDER_ENDED,
    payload: {
      slotId,
      render,
      timestamp,
    },
    tabId,
  }
};