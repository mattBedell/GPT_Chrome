import { updateSlots } from '../actions/index.js';
import { setPort, setStateFromBG } from '../actions/index.js';

export default function (store) {
  const port = chrome.runtime.connect();
  port.onMessage.addListener(msg => {
    console.log('MESSAGE', msg)
    switch(msg.type) {
    case 'INITIAL_POPUP_STATE':
    store.dispatch(setStateFromBG(msg.payload))
    console.log('STATE', store.getState())
    break;
    };
  });
};