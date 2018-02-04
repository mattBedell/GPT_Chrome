import {
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
  IMPRESSION_VIEWABILITY,
} from './../../../actions/actionTypes';

export default function(port) {
  addEventListener(DEFINE_SLOT, e => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });

  addEventListener(SET_TARGETING, e => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });

  addEventListener(CLEAR_TARGETING, e => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });

  addEventListener(IMPRESSION_VIEWABILITY, e => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });
};
