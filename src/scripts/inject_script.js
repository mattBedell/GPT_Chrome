// import patchRefresh from './pubads-refresh';
import slot from './gpt-slot';
import eventListeners from './Listeners/InjectScript';

window.googletag = window.googletag || {};

const { dispatchEvent, CustomEvent } = window;

googletag.cmd = [() => {
  // patchRefresh(googletag);
  slot(googletag);
  eventListeners(googletag);
}, ...googletag.cmd || []];

/* Reload content and background scripts
    - sends current hash to long running content/background script
    - content script reloads chrome runtime if hashes don't match
*/
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  dispatchEvent(new CustomEvent('EXTENSION_RELOAD', {
    detail: {
      hash: __webpack_hash__,
    },
  }));
}
