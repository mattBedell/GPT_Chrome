import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { POPUP_CONNECT } from '../actions/actionTypes';
import {
  switchTab,
  removeTab,
  clearTab,
  detachTab,
  attachTab,
} from '../actions/index';
import { getTab } from '../reducers/chrome';
import rootReducer from '../reducers/index';
import MessageRegister from './Connect/MessageRegister';

const makeTabId = (windowId, tabId) => `${windowId}:${tabId}`;

const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(logger));
const ActionRegister = MessageRegister(store.dispatch);

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

let popupPort = null;

chrome.runtime.onConnect.addListener((port) => {
  if (port.sender.url === chrome.runtime.getURL('index.html')) {
    port.postMessage({
      type: POPUP_CONNECT,
      tab: getTab(store.getState()),
    });
    popupPort = port;

    port.onDisconnect.addListener(() => {
      popupPort = null;
    });
  }

  port.onMessage.addListener((msg) => {
    const windowTabId = makeTabId(port.sender.tab.windowId, port.sender.tab.id);
    const messageRouter = ActionRegister(windowTabId);

    // route messages to appropriate action creator and dispatch to store
    messageRouter(msg);

    // forward messages to connected popup
    if (popupPort) {
      popupPort.postMessage(msg);
    }
  });

  if (process.env.NODE_ENV === 'development') {
    window.store = store;
    // reload extension if current hash changes
    port.onMessage.addListener((msg) => {
      if (msg.type === 'EXTENSION_RELOAD') {
        chrome.tabs.reload(port.sender.tab.id);
        chrome.runtime.reload();
      }
    });
  }
});
