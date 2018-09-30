import {
  RENDER_ENDED,
  DEFINE_SLOT,
  SET_TARGETING,
} from '../actions/actionTypes';

import {
  SLOT,
  RENDER,
  GPT,
} from '../actions/eventTypes';

const eventHelper = (action, type, subType) => ({
  type: `${type}:${subType}:${action.type}`,
});

export const events = (state = [], action) => { // eslint-disable-line
  switch (action.type) {
    case RENDER_ENDED: {
      const typeObj = eventHelper(action, SLOT, RENDER);
      return [
        ...state,
        {
          ...typeObj,
          ...action.payload,
        },
      ];
    }

    case DEFINE_SLOT: {
      const typeObj = eventHelper(action, SLOT, GPT);
      const { timestamp, slot } = action.payload;
      const { slotId } = slot;

      return [
        ...state,
        {
          ...typeObj,
          timestamp,
          slotId,
        },
      ];
    }

    case SET_TARGETING: {
      const typeObj = eventHelper(action, SLOT, GPT);

      const { timestamp, slotId, targeting } = action.payload;

      return [
        ...state,
        {
          ...typeObj,
          timestamp,
          slotId,
          targeting,
        },
      ];
    }

    default:
      return state;
  }
};
