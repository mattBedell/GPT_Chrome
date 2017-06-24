import store from './../store.js';
import { updateSlots } from './../actions/index.js';
import { getSlots } from './../reducers/index.js'

// chrome.tabs.onReplaced.addListener(function callback)
// chrome.tabs.onUpdated.addListener(function callback)
// function getCurrentTab() {
// return store.getState().currentTab;
// }


let popup;


chrome.runtime.onConnect.addListener(port => {
  if (port.sender.url === chrome.runtime.getURL('popup.html')) {
    port.postMessage({
      type: 'BG_SLOTS_TO_POPUP',
      payload: getSlots(store.getState()),
      tabId: store.getState().currentTab,
    });
  };
  port.onMessage.addListener(msg => {
    switch (msg.type) {
      case 'SCRIPT_SLOTS_TO_BG':
        store.dispatch(updateSlots(msg.payload, port.sender.tab.id));
        break;
    };
  });
});