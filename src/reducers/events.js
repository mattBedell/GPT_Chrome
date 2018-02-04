import {
  RENDER_ENDED,
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
} from '../actions/actionTypes';

import {
  SLOT,
  RENDER,
  GPT,
} from '../actions/eventTypes';

const eventHelper = (action, type, subType) => {
  return {
    type: `${type}:${subType}:${action.type}`,
  }
}

export const events = (state = {}, action) => {
  let typeObj, slotId, timestamp;
  switch (action.type) {
    case RENDER_ENDED:
      typeObj = eventHelper(action, SLOT, RENDER);
      return [
        ...state,
        Object.assign({},
          typeObj,
          action.payload)
      ];
    
    case DEFINE_SLOT:
      typeObj = eventHelper(action, SLOT, GPT);
      timestamp = action.payload.timestamp;
      slotId = action.payload.slot.slotId;

      return [
        ...state,
        Object.assign({
          timestamp,
          slotId,
        }, typeObj),
      ];

      case SET_TARGETING:
        typeObj = eventHelper(action, SLOT, GPT);
        timestamp = action.payload.timestamp;
        slotId = action.payload.slotId;

        return [
          ...state,
          Object.assign({
            timestamp,
            slotId,
            targeting: action.payload.targeting,
          }, typeObj),
        ];



    default:
    return state;
  }
}