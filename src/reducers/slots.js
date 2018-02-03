import { combineReducers } from 'redux';

import {
  RECIEVE_SLOTS,
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
  IMPRESSION_VIEWABILITY,
} from './../actions/actionTypes';

import { getTab } from './chrome';


const initialStateSlot = {
  impressionViewablity: {
    viewable: false,
    count: 0,
  }
}

const initialStateSlots = {
  slotIds: [],
}

const targeting = (state = {}, action) => {
  switch(action.type) {
    case SET_TARGETING:
      return {
        ...state,
        ...action.targeting,
      }

    case CLEAR_TARGETING:
      // TODO: clear specific targeting keys
      return {};

    default:
      return state;
  }
}

const impressionViewablity = (state = initialStateSlots.impressionViewablity, action) => {
  switch(action.type) {
    case IMPRESSION_VIEWABILITY:
      return action.impressionViewablity
    default:
      return state;
  }
}


const slot = (state = {}, action) => {
  return {
    ...state,
      targeting: targeting(state.targeting, action),
      impressionViewablity: impressionViewablity(state.impressionViewablity, action),
  }
}

const slotIds = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_SLOTS:
      return action.slots.map(slot => slot.slotId);

    default:
      if (!action.slot.slotId || state.includes(action.slot.slotId)) {
        return state;
      }
      return [...state, action.slot.slotId];
  }
}

export const slots = (state = initialStateSlots, action) => {
  switch (action.type) {
    case RECIEVE_SLOTS:
      return {
        ...state,
        slotIds: slotIds(state.slotIds, action),
        ...action.slots.reduce((slotsObj, slot) => {
              slotsObj[slot.slotId] = slot;
              return slotsObj;
        }, {})
      }

    case DEFINE_SLOT:
      return {
        ...state,
        slotIds: slotIds(state.slotIds, action),
        [action.slot.slotId]: slot(action.slot, action),
      }

    default:
    // SLOT UPDATES
      const { slotId } = action;

      if (!slotId) {
        return state;
      };

      return {
        ...state,
        [slotId]: slot(state[slotId], action),
      };
  }
}

/** Get Slots for current tab
 * @param {Object} state
 * @returns {Array} Slot objects
*/

export const getSlots = state => {
  const tab = getTab(state);
  const { currentTab } = tab;

  return tab[currentTab]['slots']['slotIds'].map(slotId => tab[currentTab]['slots'][slotId]);
}
