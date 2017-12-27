import {
  DEFINE_SLOT,
  SET_TARGETING,
  CLEAR_TARGETING,
  IMPRESSION_VIEWABILITY,
} from './../actions/actionTypes';

const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('dist/inject_script.js');
const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead)
  }
});

const port = chrome.runtime.connect();
chrome.runtime.onMessage.addListener(msg => {
  console.log('SCRIPT CONNECTED...');
});

addEventListener(DEFINE_SLOT, e => {
  port.postMessage({
    type: e.type,
    payload: e.detail,
  });
});

addEventListener(SET_TARGETING, e => {
  port.postMessage({
    type: e.type,
    payload: e.detail,
  });
});

addEventListener(CLEAR_TARGETING, e => {
  port.postMessage({
    type: e.type,
    payload: e.detail,
  });
});

addEventListener(IMPRESSION_VIEWABILITY, e => {
  port.postMessage({
    type: e.type,
    payload: e.detail,
  });
});

