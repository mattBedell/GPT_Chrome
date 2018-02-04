import {
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
} from '../../../actions/actionTypes';

import {
  defineSlot,
  setTargeting,
  clearTargeting,
} from '../../../actions';

export default function(store, msg, windowTabId) {
  switch (msg.type) {
    case DEFINE_SLOT:
      store.dispatch(defineSlot(msg.payload, windowTabId));
      break;

    case SET_TARGETING:
      store.dispatch(setTargeting(msg.payload, windowTabId));
      break;

    case CLEAR_TARGETING:
      store.dispatch(clearTargeting(msg.payload, windowTabId));
      break;
  }
};
