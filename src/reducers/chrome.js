import {
  SWITCH_TAB,
  REMOVE_TAB,
  CLEAR_TAB,
  DETACH_TAB,
  ATTACH_TAB,
  POPUP_CONNECT,
} from './../actions/actionTypes';

import { slots } from './slots';
import { events } from './events';

const tab = (state = {}, action) => {
  switch(action.type) {

    case DETACH_TAB:
      return {
        ...state,
        detached: true,
      };

    default:
      return {
        ...state,
        slots: slots(state.slots, action),
        events: events(state.events, action),
        detached: false,
      }
  }
}

const tabIds = (state = [], action) => {
  switch(action.type) {
    case REMOVE_TAB:
      return state.filter(tabId => tabId !== action.tabId);

    case ATTACH_TAB:
      return state.map(tabId => {
        if (action.detachedTab === tabId) {
          return action.tabId
        }

        return tabId;
      });

    default:
      if (state.includes(action.tabId)) {
        return state
      }

      return [...state, action.tabId];
  }
}

const tabs = (state = {}, action) => {
  switch(action.type) {
    case POPUP_CONNECT:
      return action.tab;

    case SWITCH_TAB:
      return {
        ...state,
        currentTab: action.tabId,
      }

    case REMOVE_TAB:
      const newState = {
        ...state,
        tabIds: tabIds(state.tabIds, action),
      }
      delete newState[action.tabId];
      return newState;

    case CLEAR_TAB:
      return {
        ...state,
        [action.tabId]: tab({}, action),
        tabIds: tabIds(state.tabIds, action),
      }

    case ATTACH_TAB:
      const tabExp = new RegExp(`${action.tabId.split(':')[1]}`);
      const detachedTab = state.tabIds.filter(tabId => state[tabId].detached).find(tabId => tabExp.test(tabId));

      const updatedState = {
        ...state,
        tabIds: tabIds(state.tabIds, { ...action, detachedTab }),
        [action.tabId]: tab(state[detachedTab], { ...action, detachedTab}),
      }
      delete updatedState[detachedTab];
      return updatedState;



    default:
      const { tabId } = action;
      if (!tabId) {
        return state;
      }
      return {
        ...state,
        tabIds: tabIds(state.tabIds, action),
        [tabId]: tab(state[tabId], action),
      }
  }
}

/** Get get currently active chrome tab id
 * @param {Object} state
*/
export const getCurrentTab = state => {
  return state.tabs.currentTab;
}

/** Get state slice by tab id
 * @param {Object} state
 * @param {string} [tabId= current tab id ] - tab
 * @returns {Object} The slice of state by tab id {currentTab: id, [tabId]: {...}}
*/

export const getTab = (state, tabId = null) => {
  const currentTab = getCurrentTab(state);
  return {
    currentTab,
    [tabId || currentTab]: state['tabs'][tabId || currentTab],
  }
}


export default tabs;
