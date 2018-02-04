import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { POPUP_CONNECT } from '../actions/actionTypes';
import {
  switchTab,
  removeTab,
  clearTab,
  detachTab,
  attachTab
} from '../actions/index';
import { getTab } from '../reducers/chrome';
import rootReducer from '../reducers/index';
import GptListeners from './Listeners/Background/gpt';
import GptEventListeners from './Listeners/Background/events';

const logger = createLogger({ collapsed: true});
const store = createStore(rootReducer, applyMiddleware(logger));

const makeTabId = (windowId, tabId) => `${windowId}:${tabId}`;

chrome.tabs.onActivated.addListener((active) => {
  const windowTabId = makeTabId(active.windowId, active.tabId);
  store.dispatch(switchTab(windowTabId));
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const windowTabId = makeTabId(tab.windowId, tabId);
  if (changeInfo.status === 'loading' || changeInfo.url) {
    store.dispatch(clearTab(windowTabId));
  }
});

chrome.tabs.onDetached.addListener((tabId, detachInfo) => {
  const windowTabId = makeTabId(detachInfo.oldWindowId, tabId);
  store.dispatch(detachTab(windowTabId));
});

chrome.tabs.onAttached.addListener((tabId, attachInfo) => {
  const windowTabId = makeTabId(attachInfo.newWindowId, tabId);
  store.dispatch(attachTab(windowTabId));
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  const windowTabId = makeTabId(removeInfo.windowId, tabId);
  store.dispatch(removeTab(windowTabId));
});

chrome.runtime.onConnect.addListener(port => {
  if (port.sender.url === chrome.runtime.getURL('index.html')) {
    port.postMessage({
      type: POPUP_CONNECT,
      tab: getTab(store.getState()),
    });
  };
  
  port.onMessage.addListener(msg => {
    const windowTabId = makeTabId(port.sender.tab.windowId, port.sender.tab.id);

    GptListeners(store, msg, windowTabId);
    GptEventListeners(store, msg, windowTabId);
    
  })
});