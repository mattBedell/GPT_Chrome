import {
  RENDER_ENDED,
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
} from '../../actions/actionTypes';

import {
  renderEnded,
} from '../../actions/events';

import {
  defineSlot,
  setTargeting,
  clearTargeting,
} from '../../actions/slots';

export default (dispatch) => {
  /* eslint-disable no-multi-spaces */
  const registry = new Map([
    [RENDER_ENDED,    renderEnded],
    [DEFINE_SLOT,     defineSlot],
    [SET_TARGETING,   setTargeting],
    [CLEAR_TARGETING, clearTargeting],
  ]);
  /* eslint-enable */

  return tabId => (msg) => {
    const actionCreator = registry.get(msg.type);
    if (actionCreator) {
      const action = actionCreator(msg.payload, tabId);
      dispatch(action);
    }
  };
};
