const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('inject_script.js');

const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead)
  }
});

const port = chrome.runtime.connect();

addEventListener('DOM_SLOT_TO_SCRIPT', e => {
  port.postMessage({
    type: 'SCRIPT_SLOT_TO_BG',
    payload: e.detail,
  });
});
addEventListener('DOM_SLOT_TARG_TO_SCRIPT', e => {
  port.postMessage({
    type: 'SCRIPT_SLOT_TARG_TO_BG',
    payload: e.detail
  })
});
addEventListener('DOM_REFRESH_SLOTS_TO_SCRIPT', e => {
  port.postMessage({
    type: 'SCRIPT_REFRESH_SLOTS_TO_BG',
    payload: e.detail
  })
});
addEventListener('DOM_SLOT_RENDER_TO_SCRIPT', e => {
  port.postMessage({
    type: 'SCRIPT_SLOT_RENDER_TO_BG',
    payload: e.detail
  })
});