import {
  RENDER_ENDED,
} from '../../../actions/actionTypes';

import {
  renderEnded,
} from '../../../actions/events';

export default function (store, msg, windowTabId) {
  switch (msg.type) {
    case RENDER_ENDED:
      store.dispatch(renderEnded(msg.payload, windowTabId));
      break;

    default:
      break;
  }
}
