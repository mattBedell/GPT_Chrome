import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { updateSlots } from './actions/index.js';
import chrome from './chrome/index.js';
import storeConstructor from './store.js';

let store = storeConstructor('appStore');
import App from './components/app.jsx';

chrome(store);
window.getState = () => store.getState();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/app.jsx', () => { render(App) })
};
