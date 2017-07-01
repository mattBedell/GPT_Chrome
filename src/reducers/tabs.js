import { slots } from './slots';
export const currentTab = (state = '', action) => {
  if(typeof action !== 'undefined' && action.tabId) {
    return action.tabId;
  }
  return state;
}
export const tabs = (state = {}, action) => {
  if(action.type = 'UPDATE_SLOTS') {
    let tabObj = {
        [action.tabId]: {
          slots: slots()
      }
    }
    let newTabObj = Object.assign({})
    return Object.assign({}, state, newTabObj)
  }
  return state;
}