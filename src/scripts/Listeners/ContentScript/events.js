import {
  RENDER_ENDED,
} from '../../../actions/actionTypes';

const { addEventListener } = window;

export default function (port) {
  addEventListener(RENDER_ENDED, (e) => {
    port.postMessage({
      type: e.type,
      payload: e.detail,
    });
  });
}
