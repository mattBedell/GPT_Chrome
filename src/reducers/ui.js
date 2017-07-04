export const ui = (state = { selectedSlot: false, selectedSlotNav: 'targeting' }, action) => {
  switch(action.type) {
    case 'SELECT_SLOT':
      return Object.assign({}, state, { selectedSlot: action.slotIdent });

    case 'SELECT_SLOT_NAV':
      return Object.assign({}, state, { selectedSlotNav: action.slotNav });

    default:
      return state;
  }
};


export const getUiObj = (state) => {
  return state.ui;
};