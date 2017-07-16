export const dfp = (state = { dfpLink: false }, action) => {
  switch(action.type) {
    case 'SET_DFP_LINK':
    return Object.assign({}, state, { dfpLink: action.dfpLink });
    default:
    return state
  }
}

export const getCopyDfpLink= state => {
  return state.dfp.dfpLink
}