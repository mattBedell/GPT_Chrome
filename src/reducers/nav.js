import { SET_VIEW } from '../actions/actionTypes';

const initialState = {
  selectedView: 'Slots',
}
const nav = (state = initialState, action) => {
  switch(action.type) {
    case SET_VIEW:
      return {
        ...state,
        selectedView: action.payload.selectedView
      }
    default:
      return state;
  }
}

/** Get top level navigation
 * @param {Object} state
*/
export const getSelectedView = state => state.nav.selectedView;


export default nav;