
import addEventListeners from './Listeners/ContentScript/events';
import addGptListeners from './Listeners/ContentScript/gpt';

const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('dist/inject_script.js');
const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead);
  }
});

const port = chrome.runtime.connect();

chrome.runtime.onMessage.addListener(() => {
  console.log('SCRIPT CONNECTED...');
});

addGptListeners(port);
addEventListeners(port);
