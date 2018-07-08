import { DEFINE_SLOT, SET_TARGETING } from '../actions/actionTypes';

const makeUid = () => `${Math.random().toString(36).substring(2)}-${Date.now().toString(36)}`;
const slotSizesToArray = slot => slot.getSizes().map(sizeObj => [sizeObj.getWidth(), sizeObj.getHeight()]);

const { dispatchEvent, CustomEvent } = window;
const configureSlotObject = (slot) => {
  const path = slot.getAdUnitPath();
  const div = slot.getSlotElementId();
  return {
    slotId: slot.slotId,
    div,
    path,
    gptId: path.split('/')[1],
    name: path.split('/')[path.split('/').length - 1],
    sizes: slotSizesToArray(slot),
    divExists: !!document.getElementById(`${div}`),
    refresh: 0,
    timestamp: Date.now(),
  };
};

function patchSetTargeting(key, value) {
  this._setTargeting(key, value);
  dispatchEvent(new CustomEvent(SET_TARGETING, {
    detail: {
      timestamp: Date.now(),
      slotId: this.slotId,
      targeting: {
        [key]: Array.isArray(value) ? [...value] : [value],
      },
    },
  }));
  return this;
}

function defineSlot(...args) {
  const slot = googletag._defineSlot(...args);
  slot.slotId = makeUid();
  dispatchEvent(new CustomEvent(DEFINE_SLOT, { detail: configureSlotObject(slot) }));
  slot._setTargeting = slot.setTargeting;
  slot.setTargeting = patchSetTargeting;
  return slot;
}


/* eslint-disable */
export default function (googletag) {
  googletag._defineSlot = googletag.defineSlot;
  googletag.defineSlot = defineSlot;

  return googletag;
}
/* enable-disable */
