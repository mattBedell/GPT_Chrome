
import {
  RECIEVE_SLOTS,
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
  IMPRESSION_VIEWABILITY,
} from '../actions/actionTypes';

import { getTab } from './chrome'; // eslint-disable-line


// const initialStateSlot = {
//   impressionViewablity: {
//     viewable: false,
//     count: 0,
//   },
// };

const initialStateSlots = {
  slotIds: [],
};

const targeting = (state = {}, action) => {
  switch (action.type) {
    case SET_TARGETING:
      return {
        ...state,
        ...action.payload.targeting,
      };

    case CLEAR_TARGETING:
      // TODO: clear specific targeting keys
      return {};

    default:
      return state;
  }
};

/** Get Slots for current tab
 * @param {Object} state
 * @param {String} slotId
 * @returns {Object} targeting
*/

export const getTargeting = (state, slotId) => {
  const tab = getTab(state);
  const { currentTab } = tab;

  return tab[currentTab].slots[slotId].targeting;
};

const impressionViewablity = (state = false, action) => {
  switch (action.type) {
    case IMPRESSION_VIEWABILITY:
      return action.payload.impressionViewablity;
    default:
      return state;
  }
};


const slot = (state = {}, action) => ({
  ...state,
  targeting: targeting(state.targeting, action),
  impressionViewablity: impressionViewablity(state.impressionViewablity, action),
});

const slotIds = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_SLOTS:
      return action.payload.slots.map(slotObj => slotObj.slotId);

    default:
      if (!(action.payload.slot && action.payload.slot.slotId) || state.includes(action.payload.slot.slotId)) {
        return state;
      }
      return [...state, action.payload.slot.slotId];
  }
};

export const slots = (state = initialStateSlots, action) => {
  switch (action.type) {
    case RECIEVE_SLOTS: {
      return {
        ...state,
        slotIds: slotIds(state.slotIds, action),
        ...action.payload.slots.reduce((slotsObj, incomingSlot) => {
          slotsObj[slot.slotId] = incomingSlot; // eslint-disable-line
          return slotsObj;
        }, {}),
      };
    }

    case DEFINE_SLOT: {
      return {
        ...state,
        slotIds: slotIds(state.slotIds, action),
        [action.payload.slot.slotId]: slot(action.payload.slot, action),
      };
    }

    case SET_TARGETING: {
      const { slotId } = action.payload;
      return {
        ...state,
        [slotId]: slot(state[slotId], action),
      };
    }

    default:
      return state;
  }
};

/** Get Slots for current tab
 * @param {Object} state
 * @returns {Array} Slot objects
*/

export const getSlots = (state) => {
  const tab = getTab(state);
  const { currentTab } = tab;

  return tab[currentTab].slots.slotIds.map(slotId => tab[currentTab].slots[slotId]);
};
