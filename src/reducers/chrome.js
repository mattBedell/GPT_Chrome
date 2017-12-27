import {
  SWITCH_TAB,
} from './../actions/actionTypes';

import { slots } from './slots';

const tab = (state = {}, action) => {
  return {
    ...state,
    slots: slots(state.slots, action),
  }
}

const tabs = (state = {}, action) => {
  switch(action.type) {
    case SWITCH_TAB:
      return {
        ...state,
        currentTab: action.tabId,
      }
    default:
      const { tabId } = action;
      if (!tabId) {
        return state;
      }
      return {
        ...state,
        [tabId]: tab(state[tabId], action)
      }
  }
}

export default tabs;
