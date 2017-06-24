import store from './../store.js';
import { updateSlots } from '../actions/index.js';

export default function () {
  const port = chrome.runtime.connect();
  port.onMessage.addListener(msg => {
    switch(msg.type) {

    case 'BG_SLOTS_TO_POPUP':
    store.dispatch(updateSlots(msg.payload, msg.tabId))
    break;
    };
  });
};