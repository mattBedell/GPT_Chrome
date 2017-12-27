import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import {
  SWITCH_TAB,
  POPUP_CONNECT,
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
  IMPRESSION_VIEWABILITY,
} from './../actions/actionTypes';
import { defineSlot, setTargeting, clearTargeting, switchTab } from '../actions/index';
import rootReducer from './../reducers/index';

const logger = createLogger({ collapsed: true});
const store = createStore(rootReducer, applyMiddleware(logger));

window.getState = store.getState;

chrome.tabs.onActivated.addListener((active) => {
  store.dispatch(switchTab(active.tabId));
});

chrome.runtime.onConnect.addListener(port => {
  // store.dispatch(switchTab(port.sender.tab.id));
  if (port.sender.url === chrome.runtime.getURL('index.html')) {
    // port.postMessage({
    //   type: 'POPUP_CONNECT',
    //   payload: Object.assign({}, state, { slots: getSlotsByTab(state, tabId) }),
    //   tabId
    // });
  };
  
  port.onMessage.addListener(msg => {
    const tabId = port.sender.tab.id;
    switch (msg.type) {
      case DEFINE_SLOT:
        store.dispatch(defineSlot(msg.payload, tabId));
        break;

      case SET_TARGETING:
        store.dispatch(setTargeting(msg.payload, tabId));
        break;

      case CLEAR_TARGETING:
        store.dispatch(clearTargeting(msg.payload, tabId));
        break;
    }
  })
});