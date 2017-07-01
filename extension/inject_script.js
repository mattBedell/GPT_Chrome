window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.gptslots = [];
googletag.cmd.push(function () {
  console.log('---->>>> INIT... QUEUE POSITION', googletag.cmd.j);
  window._defineSlot = window.googletag.defineSlot;
  window.googletag.defineSlot = (...args) => {
    console.log(' --->>> slot defined')
    let slot = window._defineSlot(...args);
      dispatchEvent(new CustomEvent('DOM_SLOT_TO_SCRIPT', { detail: configSlotInfo(slot) }));
    return slot;
  };
});

function configSlotInfo(slot) {
  let path = slot.getAdUnitPath();
  let name = path.split('/')[path.split('/').length - 1];
  let divId = slot.getSlotElementId();
  let configuredSlot = {
    path,
    name,
    divId,
    divExists: document.querySelector(`#${divId}`) ? true : false,
    targeting: getTargeting(slot),
    ident: `${path.split('/')[1]}${name}${divId}`
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