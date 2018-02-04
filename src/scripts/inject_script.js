import patchRefresh from './pubads-refresh';
import slot from './gpt-slot';
import eventListeners from './Listeners/InjectScript';
window.googletag = window.googletag || {};

googletag.cmd = [() => {
  // patchRefresh(googletag);
  slot(googletag);
  eventListeners(googletag);

}, ...googletag.cmd || []];
