import { combineReducers } from 'redux';
import { slots, getSlotsByTabId, getSlots } from './slots.js';
import { currentTab, tabs, getTab } from './tabs.js';

export function getSlotsByTab(state, tabId) {
  return getSlotsByTabId(state, tabId);
};

export function getAllSlots(state) {
  return getSlots(state);
}
export function getCurrentTab(state) {
  return getTab(state);
}

export const appStore = combineReducers({
  slots,
  currentTab
});

export const bgStore = combineReducers({
  slots,
  currentTab,
  tabs
});

export default combineReducers({
  slots,
  currentTab
});