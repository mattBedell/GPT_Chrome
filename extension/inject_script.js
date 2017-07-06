window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.gptslots = [];
const ident = Math.floor(Math.random()*1000000000);
googletag.cmd.push(function () {
  console.log('---->>>> INIT... QUEUE POSITION', googletag.cmd.j);
  window._gptRefresh = googletag.pubads().refresh.bind(googletag.pubads());
  googletag.pubads().__proto__.refresh = args => {
    console.log('REFRESH ARGS: ', args);
    let whichSlots;
    if(typeof args === 'undefined') {
      whichSlots = 'ALL';
    } else {
      whichSlots = args.map(slot => slot.slotIdent);
    }
    window._gptRefresh(args);
    dispatchEvent(new CustomEvent('DOM_REFRESH_SLOTS_TO_SCRIPT', { detail: { whichSlots } }));
  };
  window._defineSlot = window.googletag.defineSlot;
  window.googletag.defineSlot = (...args) => {
    console.log(' --->>> slot defined')
    let slot = window._defineSlot(...args);
    dispatchEvent(new CustomEvent('DOM_SLOT_TO_SCRIPT', { detail: configSlotInfo(slot) }));
    slot._setTargeting = slot.setTargeting;
    slot.setTargeting = patchSetTargeting;
    return slot;
  };
});

function configSlotInfo(slot) {
  let path = slot.getAdUnitPath();
  let name = path.split('/')[path.split('/').length - 1];
  let divId = slot.getSlotElementId();
  let slotIdent = `${ident}-${divId}`;
  slot.slotIdent = slotIdent;
  let configuredSlot = {
    path,
    name,
    divId,
    divExists: document.querySelector(`#${divId}`) ? true : false,
    targeting: [],
    slotIdent,
    isRefreshed: 0,
  };
  window.gptslots.push(configuredSlot);
  return configuredSlot;
};

function getTargeting(slot) {
  return slot.getTargetingKeys().map(key => {
    return {
      key,
      val: slot.getTargeting(key),
    };
  })
};

function patchSetTargeting(key, val) {
  let { slotIdent } = this;
  this._setTargeting(key, val);
  let targVals = val;
  if(typeof val !== 'object') targVals = [val]
  dispatchEvent(new CustomEvent('DOM_SLOT_TARG_TO_SCRIPT', {detail: {
    slotIdent,
    targObj: {
      key,
      val: targVals,
    }
  }}))
}
// addEventListener('REQUEST_DOM_SLOTS', () => {
//     dispatchEvent(new CustomEvent('DOM_SLOTS_TO_SCRIPT', {detail: window.gptslots}));
// });

// window.onload = () => {
//     dispatchEvent(new CustomEvent('DOM_SLOTS_TO_SCRIPT', {detail: window.gptslots}));
// }









// let slotshape = {
//     adUnit: 'Leaderboard_1',
//     adUnitPath: '123455/Leaderboard_1',
//     div: 'ad-div-leaderboard',
//     divExists: true,
//     targeting: [
//         {
//             key: `${key}`,
//             val: `${val}`,
//         },
//     ]
// }