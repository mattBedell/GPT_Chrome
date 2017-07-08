import storeConstructor from './../store.js';
import { updateSlots, updateSlotTargs, updateSlotRefresh, updateSlotRender, clearSlots, changeTab } from './../actions/index.js';
import { getSlotsByTab, getCurrentTab } from './../reducers/index.js'
let store = storeConstructor('bgStore');
// let store = storeInit('bgStore');
// chrome.tabs.onReplaced.addListener(function callback)
window.getState = () => store.getState();

chrome.tabs.onActivated.addListener((active) => {
  store.dispatch(changeTab(active.tabId));
});

chrome.tabs.onRemoved.addListener((tabId) => {
  store.dispatch(clearSlots(tabId));
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if(change.status === 'loading') {
    store.dispatch(clearSlots(getCurrentTab(store.getState())))
  }
})


chrome.runtime.onConnect.addListener(port => {
  if (port.sender.url === chrome.runtime.getURL('index.html')) {
    let tabId = getCurrentTab(store.getState());
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
        break;
      case 'SCRIPT_SLOT_TARG_TO_BG':
        store.dispatch(updateSlotTargs(msg.payload));
        break;
      case 'SCRIPT_REFRESH_SLOTS_TO_BG':
        store.dispatch(updateSlotRefresh(msg.payload));
        break;
      case 'SCRIPT_SLOT_RENDER_TO_BG':
        // store.dispatch(updateSlotRender(msg.payload));
        break;
    };
  });
});