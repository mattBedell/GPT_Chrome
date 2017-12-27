import { SWITCH_TAB } from './actionTypes';

export const switchTab = tabId => {
  return {
    type: SWITCH_TAB,
    tabId,
  }
}