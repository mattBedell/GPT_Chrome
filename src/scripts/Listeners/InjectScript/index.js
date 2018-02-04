
import {
  RENDER_ENDED,
} from './../../../actions/actionTypes';


export default function(googletag) {
  googletag.pubads().addEventListener('slotRenderEnded', event => {
    
    const timestamp = Date.now();

    const render = {...event };

    delete render.slot;

    dispatchEvent(new CustomEvent(RENDER_ENDED, { detail: {
      slotId: event.slot.slotId,
      render,
      timestamp,
    } }));
  });
};
