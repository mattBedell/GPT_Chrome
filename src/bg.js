import {store} from 'redux';
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(msg => {
        port.postMessage({slot: msg.slot})
    })
})