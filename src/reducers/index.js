import { combineReducers } from 'redux';
import { slots, getSlotsByTabId, getSlots } from './slots.js';
import { currentTab, tabs } from './tabs.js';

export function getSlotsByTab(state, tabId) {
  return getSlotsByTabId(state, tabId);
};

export function getAllSlots(state) {
  return getSlots(state);
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