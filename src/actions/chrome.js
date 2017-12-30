import { SWITCH_TAB, REMOVE_TAB, CLEAR_TAB, ATTACH_TAB, DETACH_TAB } from './actionTypes';

export const switchTab = tabId => {
  return {
    type: SWITCH_TAB,
    tabId,
  }
}

export const removeTab = tabId => {
  return {
    type: REMOVE_TAB,
    tabId,
  }
}

export const clearTab = tabId => {
  return {
    type: CLEAR_TAB,
    tabId,
  }
}

export const detachTab = tabId => {
  return {
    type: DETACH_TAB,
    tabId,
  }
}

export const attachTab = tabId => {
  return {
    type: ATTACH_TAB,
    tabId,
  }
}