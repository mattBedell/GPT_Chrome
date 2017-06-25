const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('inject_script.js');

const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead)
  }
});





const port = chrome.runtime.connect();

port.onMessage.addListener(msg => {
  switch (msg.type) {
    case 'REQUEST_DOM_SLOTS':
      dispatchEvent(new Event('REQUEST_DOM_SLOTS'));
      break;
  };
});

addEventListener('DOM_SLOT_TO_SCRIPT', e => {
  port.postMessage({
    type: 'SCRIPT_SLOT_TO_BG',
    payload: e.detail,
  });
});