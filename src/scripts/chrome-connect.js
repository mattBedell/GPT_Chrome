import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connect } from '../actions/popup';
import rootReducer from '../reducers/index';
// import { getCurrentTab } from '../reducers/chrome';

import MessageRegister from './Connect/MessageRegister';

import { POPUP_CONNECT } from '../actions/actionTypes';

const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(logger));
const ActionRegister = MessageRegister(store.dispatch);

window.getState = store.getState;

const port = chrome.runtime.connect();
let messageRouter = null;
port.onMessage.addListener((msg) => {
  // TODO: standardize popup connect
  if (msg.type === POPUP_CONNECT) {
    store.dispatch(connect(msg.tab));
    messageRouter = ActionRegister(msg.tab.currentTab);
  }

  /*
    if popup has connected and recieved state,
    dispatch forwarded actions from background script
  */
  if (messageRouter) {
    messageRouter(msg);
  }
});

export default store;
