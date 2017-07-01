// chrome.runtime.connect();

chrome.runtime.onMessage.addListener(function(msg){
    console.log(msg);
});

//     console.assert('gpt_chrome');
//     port.onMessage.addListener((msg) => {
//         console.log(msg, '<<<---- script recieved msg');
//     })
// })