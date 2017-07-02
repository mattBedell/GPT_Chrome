import { slots } from './slots';

const status = (state = '', action) => {
  if(action.status) {
    return status;
  }
  return state;
}




export const currentTab = (state = '', action) => {
  if(action.type === 'CHANGE_TAB') {
    return action.tabId;
  }
  return state;
}
export const tabs = (state = {}, action) => {
  if(action.type = 'UPDATE_TAB') {
    let tabObj = {
        [action.tabId]: {
      }
    }
    let newTabObj = Object.assign({}, tabObj);
    return Object.assign({}, state, newTabObj)
  }
  return state;
}
export const getTab = state => state.currentTab;