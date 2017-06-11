
// chrome.tabs.onReplaced.addListener(function callback)
// chrome.tabs.onUpdated.addListener(function callback)


chrome.runtime.onConnect.addListener(port => {
    console.log('----->>>>> CONNECTED', port.sender)
    port.onMessage.addListener(msg => {
        switch(msg.type) {
            case 'SLOT_PAYLOAD':
                // Update proxy store
                port.postMessage({
                    type: 'DISPLAY_SLOTS',
                    payload: msg.payload
                });
        }
    });
});












// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     console.log(`--->>> got tab: ${tabs[0].id}`)
// });
