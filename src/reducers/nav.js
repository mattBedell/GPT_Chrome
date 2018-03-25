import {
  SET_VIEW,
  SET_SLOT_OPEN,
  QUICK_PANEL_TOGGLE,
  POPUP_CONNECT
} from '../actions/actionTypes';

import { combineReducers } from 'redux';


function editSlotNav(state, action, callback) {
  return state.map(slotNav => {
    if (slotNav.slotId === action.payload.slotId) {
      return {
        ...slotNav,
        ...callback(slotNav, action)
      }
    }
    return slotNav;
  })
}

const view = (state = 'Slots', action) => {
  switch(action.type) {
    case SET_VIEW:
      return action.payload.selectedView;

    default:
      return state;
  }
}

const slots = (state = [], action) => {
  switch(action.type) {
    case POPUP_CONNECT:
      return [...state,
        ...action.tab[action.tab.currentTab].slots.slotIds.map(slotId => {
            return {
              slotId,
              isOpen: false,
              selection: 'targeting',
              quickPanelOpen: false,
            }
        })
      ];

    case SET_SLOT_OPEN:
      return editSlotNav(state, action, (slotObj, action) => {
        return {
          isOpen: action.payload.isOpen,
        }
      })

    case QUICK_PANEL_TOGGLE:
      return editSlotNav(state, action, (slotObj) => {
        return {
          quickPanelOpen: !slotObj.quickPanelOpen,
        }
      })

    default:
      return state;
  }
}

/** Get top level navigation
 * @param {Object} state
 * @returns {String} Viewname
*/
export const getSelectedView = state => state.nav.view;

/** Get selected slot id
 * @param {Object} state
 * @param {String} slotId
 * @returns {Object} SlotNav Object
*/
export const getSlotNav = (state, slotId) => {
  return state.nav.slots.find(slotNav => slotId === slotNav.slotId);
}


export default combineReducers({ view, slots });