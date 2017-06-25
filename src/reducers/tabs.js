export const currentTab = (state = '', action) => {
  if(typeof action !== 'undefined' && action.tabId) {
    return action.tabId;
  }
  return state;
}