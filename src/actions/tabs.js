export const changeTab = tabId => {
  return {
    type: 'CHANGE_TAB',
    tabId
  }
};

export const updateTab = status => {
  type: 'UPDATE_TAB',
  status
}