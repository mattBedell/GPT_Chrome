export const ui = (state = { selectedSlot: false }, action) => {
  switch(action.type) {
    case 'SELECT_SLOT':
      return Object.assign({}, state, { selectedSlot: action.slotIdent });
    default:
      return state;
  }
};


export const getUiObj = (state) => {
  return state.ui;
};