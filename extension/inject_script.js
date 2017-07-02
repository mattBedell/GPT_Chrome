window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.gptslots = [];
const ident = Math.floor(Math.random()*1000000000);
googletag.cmd.push(function () {
  console.log('---->>>> INIT... QUEUE POSITION', googletag.cmd.j);
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
    slotIdent
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
  dispatchEvent(new CustomEvent('DOM_SLOT_TARG_TO_SCRIPT', {detail: {
    slotIdent,
    targObj: {
      key,
      val
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