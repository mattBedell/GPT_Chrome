import store from './store.js';
import { updateSlots } from './actions/index.js';
import { getSlots } from './reducers/index.js';

// chrome.tabs.onReplaced.addListener(function callback)
// chrome.tabs.onUpdated.addListener(function callback)

chrome.runtime.onConnect.addListener(port => {
    console.log('----->>>>> CONNECTED', port.sender)
    port.onMessage.addListener(msg => {
        switch(msg.type) {
            case 'SLOT_PAYLOAD':
                store.dispatch(updateSlots(msg.payload, port.sender.tab.id))
                port.postMessage({
                    type: 'DISPLAY_SLOTS',
                    payload: getSlots(store.getState()),
                });
                console.log(store.getState())
                break;
        }
    });
});












// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     console.log(`--->>> got tab: ${tabs[0].id}`)
// });
