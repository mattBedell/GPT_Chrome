import { updateSlots } from '../actions/index.js';

export default function (store) {
  const port = chrome.runtime.connect();
  port.onMessage.addListener(msg => {
    console.log('MESSAGE', msg)
    switch(msg.type) {
    case 'BG_SLOTS_TO_POPUP':
    store.dispatch(updateSlots(msg.payload, msg.tabId))
    console.log('STATE', store.getState())
    break;
    };
  });
};