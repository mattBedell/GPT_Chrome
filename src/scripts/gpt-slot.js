import { DEFINE_SLOT, SET_TARGETING, } from './../actions/actionTypes';
const makeUid = () => {
  return `${Math.random().toString(36).substring(2)}-${Date.now().toString(36)}`;
}
const slotSizesToArray = slot => slot.getSizes().map(sizeObj => [sizeObj.getWidth(), sizeObj.getHeight()]);


const configureSlotObject = slot => {
  let path = slot.getAdUnitPath();
  let div = slot.getSlotElementId();
  return {
    slotId: slot.slotId,
    div,
    path,
    gptId: path.split('/')[1],
    name: path.split('/')[path.split('/').length - 1],
    sizes: slotSizesToArray(slot),
    divExists: document.getElementById(`${div}`) ? true : false,
    refresh: 0,
  }
}

function defineSlot(...args) {
  let slot = googletag._defineSlot(...args);
  slot.slotId = makeUid();
  dispatchEvent(new CustomEvent(DEFINE_SLOT, { detail: configureSlotObject(slot) }));
  slot._setTargeting = slot.setTargeting;
  slot.setTargeting = patchSetTargeting;
  return slot;
};

function patchSetTargeting(key, value) {
  this._setTargeting(key, value);
  dispatchEvent(new CustomEvent(SET_TARGETING, { detail: {
    slotId: this.slotId,
    targeting: this.getTargetingMap(),
  }}));
  return this;
}

export default function (googletag) {
  googletag._defineSlot = googletag.defineSlot;
  googletag.defineSlot = defineSlot;

  return googletag;
};