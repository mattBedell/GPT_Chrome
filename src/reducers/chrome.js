export const chrome = (state = {}, action) => {
  switch(action.type) {
    case 'SET_PORT':
    return { cPort: action.payload };

    case 'SET_STATE_FROM_BG':
    return action.payload.chrome
    default:
    return state;
  }
}
export const getPort = state => {
  return state.chrome.cPort;
}