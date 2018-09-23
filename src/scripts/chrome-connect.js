import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connect } from '../actions/popup';
import rootReducer from '../reducers/index';
import { getCurrentTab } from '../reducers/chrome';

import GptListeners from './Listeners/Background/gpt';
import GptEventListeners from './Listeners/Background/events';

import { POPUP_CONNECT } from '../actions/actionTypes';

const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(logger));

// store.dispatch(connect(testState));
window.getState = store.getState;

const port = chrome.runtime.connect();
port.onMessage.addListener((msg) => {
  switch (msg.type) {
    case POPUP_CONNECT:
      store.dispatch(connect(msg.tab));
      break;

    default: {
      const currentTab = getCurrentTab(store.getState());
      GptListeners(store, msg, currentTab);
      GptEventListeners(store, msg, currentTab);
      break;
    }
  }
});

export default store;
