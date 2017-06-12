import store from './../store.js';
import { updateSlots } from '../actions/index.js';

export default function() {
    const port = chrome.runtime.connect();
    port.onMessage.addListener(msg => {
        switch(msg.type) {
            case 'DISPLAY_SLOTS':
            // update local store
            console.log(msg.payload);
        };
    });
};
