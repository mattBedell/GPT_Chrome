import patchRefresh from './pubads-refresh';
import slot from './gpt-slot';
window.googletag = window.googletag || {};

googletag.cmd = [() => {
  // patchRefresh(googletag);
  slot(googletag);
}, ...googletag.cmd || []];
