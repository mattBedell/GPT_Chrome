
import addEventListeners from './Listeners/ContentScript/events';
import addGptListeners from './Listeners/ContentScript/gpt';

const { addEventListener } = window;

const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('dist/inject_script.js');
const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead);
  }
});

const port = chrome.runtime.connect();

addGptListeners(port);
addEventListeners(port);

if (process.env.NODE_ENV === 'development') {
  addEventListener('EXTENSION_RELOAD', (event) => {
    const { type, detail: payload } = event;
    // eslint-disable-next-line
    if (payload.hash !== __webpack_hash__) {
      port.postMessage({
        type,
        payload,
      });
    }
  });
}
