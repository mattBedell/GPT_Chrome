import store from './../store.js';
import { updateSlots, changeTab } from './../actions/index.js';
import { getSlotsByTab } from './../reducers/index.js'

// let store = storeInit('bgStore');
// chrome.tabs.onReplaced.addListener(function callback)
// chrome.tabs.onUpdated.addListener(function callback)
// function getCurrentTab() {
// return store.getState().currentTab;
// }
// chrome.tabs.onActivated.addListener(activeTab => {
//   store.dispatch(changeTab(activeTab.tabId))
// })
chrome.tabs.onUpdated.addListener((tabId, tabInfo, tab) => {
  // console.log('TabID: ', tabId);
  // console.log('TAB INFO: ', tabInfo);
  // console.log('TAB: ', tab);
})


chrome.runtime.onConnect.addListener(port => {
  if (port.sender.url === chrome.runtime.getURL('index.html')) {
    let tabId = store.getState().currentTab;
    console.log('SENDING SLOTS: ', getSlotsByTab(store.getState(), tabId))
    port.postMessage({
      type: 'BG_SLOTS_TO_POPUP',
      payload: getSlotsByTab(store.getState(), tabId),
      tabId
    });
  };
  
  port.onMessage.addListener(msg => {
    let tabId = port.sender.tab.id;
    msg.payload.tabId = tabId;
    switch (msg.type) {
      case 'SCRIPT_SLOT_TO_BG':
        store.dispatch(updateSlots([msg.payload], tabId));
        console.log('STATE: ', store.getState())
        break;
    };
  });
});