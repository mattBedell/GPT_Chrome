const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('inject_script.js');

const checkHead = setInterval(() => {
  if (document.head) {
    document.head.appendChild(injectScript);
    clearInterval(checkHead)
  }
});

const port = chrome.runtime.connect();
chrome.runtime.onMessage.addListener(msg => {
  console.log('MESSAGE');
  switch(msg.type) {
    case 'POPUP_JUMP_TO_DIV':
      dispatchEvent(new CustomEvent('SCROLL_TO_DIV', {detail: msg.payload }))
      break;
  }
});

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