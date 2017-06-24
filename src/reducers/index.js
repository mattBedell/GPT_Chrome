import { combineReducers } from 'redux';
import { tabs, currentTab, getTabSlots } from './slots.js';

export function getSlots(state) {
    return getTabSlots(state)
}
export default combineReducers({
    tabs,
    currentTab
});