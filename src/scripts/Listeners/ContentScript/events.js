import {
  RENDER_ENDED,
} from '../../../actions/actionTypes';

export default function (port) {
  addEventListener(RENDER_ENDED, (e) => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });
}
