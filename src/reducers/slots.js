import {
  combineReducers
} from 'redux';

const slots = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SLOTS':
      return [...action.payload]
    default:
      return state;
  };
};

export const currentTab = (state = '', action) => {
  if (action && action.tabId) return action.tabId
  return state;
};

export const tabs = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SLOTS':
      return Object.assign({}, state, {
        [currentTab(state, action)]: slots(state, action)
      });
    default:
      return state;
  };
};



export const getTabSlots = (state) => {
  return state.tabs[state.currentTab]
}

// let state_shape = {
// '32134': {
// slots: []
// },
// }