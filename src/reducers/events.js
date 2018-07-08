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

export const events = (state = {}, action) => { // eslint-disable-line
  switch (action.type) {
    case RENDER_ENDED: {
      const typeObj = eventHelper(action, SLOT, RENDER);
      return [
        ...state,
        Object.assign({},
          typeObj,
          action.payload),
      ];
    }

    case DEFINE_SLOT: {
      const typeObj = eventHelper(action, SLOT, GPT);

      const { timestamp, slot } = action.payload;
      const { slotId } = slot;

      return [
        ...state,
        Object.assign({
          timestamp,
          slotId,
        }, typeObj),
      ];
    }

    case SET_TARGETING: {
      const typeObj = eventHelper(action, SLOT, GPT);

      const { timestamp, slotId } = action.payload;

      return [
        ...state,
        Object.assign({
          timestamp,
          slotId,
          targeting: action.payload.targeting,
        }, typeObj),
      ];
    }

    default:
      return state;
  }
};
