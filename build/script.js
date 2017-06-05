const injectScript = document.createElement('script');
injectScript.src = chrome.runtime.getURL('inject_script.js');
document.head.appendChild(injectScript);
const port = chrome.runtime.connect({name: "hellohellow"});
port.onMessage.addListener((message, sender) => {
    console.log(`----->>>>> Mesage: ${message.slot}`);
})


addEventListener('custClick', (e) => {
    console.log('posted message')
    port.postMessage({slot: e.detail})
})

