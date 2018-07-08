

function refresh(slotsArg) {
  let slots = slotsArg;
  if (!Array.isArray(slotsArg)) {
    slots = [];
  }

  dispatchEvent(new CustomEvent('REFRESH_SLOTS', { detail: { slots } }));
  googletag._refresh(slots);
}

export default function (googletag) {
  googletag._refresh = googletag.pubads().refresh.bind(googletag.pubads());
  googletag.pubads().__proto__.refresh = refresh;
  return googletag;
}
