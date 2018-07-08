import {
  SWITCH_TAB, REMOVE_TAB, CLEAR_TAB, ATTACH_TAB, DETACH_TAB,
} from './actionTypes';

export const switchTab = tabId => ({
  type: SWITCH_TAB,
  tabId,
});

export const removeTab = tabId => ({
  type: REMOVE_TAB,
  tabId,
});

export const clearTab = tabId => ({
  type: CLEAR_TAB,
  tabId,
});

export const detachTab = tabId => ({
  type: DETACH_TAB,
  tabId,
});

export const attachTab = tabId => ({
  type: ATTACH_TAB,
  tabId,
});
