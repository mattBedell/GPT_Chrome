import { combineReducers } from 'redux';
import { slots, getSlotsByTabId, getSlots } from './slots.js';
import { currentTab, tabs, getTab } from './tabs.js';
import { ui, getUiObj } from './ui.js';
import { chrome, getPort } from './chrome.js';
import { dfp, getCopyDfpLink } from './dfp.js';

export function getUi(state) {
  return getUiObj(state);
}
export function getSlotsByTab(state, tabId) {
  return getSlotsByTabId(state, tabId);
}
export function getAllSlots(state) {
  return getSlots(state);
}
export function getCurrentTab(state) {
  return getTab(state);
}
export function getChromePort(state) {
  return getPort(state);
}
export function getDfpLink(state) {
  return getCopyDfpLink(state);
}

export const appStore = combineReducers({
  slots,
  currentTab,
  ui,
  dfp,
});

export const bgStore = combineReducers({
  slots,
  currentTab,
});

export default combineReducers({
  slots,
  currentTab
});