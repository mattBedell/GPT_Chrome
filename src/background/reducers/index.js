import { combineReducers } from 'redux';
import { tabs, currentTab, getTabSlots } from './slots.js';

export function getSlots(...args) {
    getTabSlots(...args)
}
export default combineReducers({
    tabs,
    currentTab
});