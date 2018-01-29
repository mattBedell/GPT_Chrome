import { SET_VIEW, SET_SLOT } from '../actions/actionTypes';

const initialState = {
  selectedView: 'Slots',
  selectedSlot: '',
}
const nav = (state = initialState, action) => {
  switch(action.type) {
    case SET_VIEW:
      return {
        ...state,
        selectedView: action.payload.selectedView,
      }
    case SET_SLOT:
      return {
        ...state,
        selectedSlot: action.payload.selectedSlot,
      }
    default:
      return state;
  }
}

/** Get top level navigation
 * @param {Object} state
 * @returns {String} Viewname
*/
export const getSelectedView = state => state.nav.selectedView;

/** Get selected slot id
 * @param {Object} state
 * @returns {String} SlotId
*/
export const getSelectedSlot = state => state.nav.selectedSlot;


export default nav;