
import {
  RENDER_ENDED,
} from '../../../actions/actionTypes';

const { dispatchEvent, CustomEvent } = window;

export default function (googletag) {
  googletag.pubads().addEventListener('slotRenderEnded', (event) => {
    const timestamp = Date.now();

    const render = { ...event };

    delete render.slot;

    dispatchEvent(new CustomEvent(RENDER_ENDED, {
      detail: {
        slotId: event.slot.slotId,
        render,
        timestamp,
      },
    }));
  });
}
