import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// 为了把Store传入组件，必须使用 Redux 提供的Provider组件在应用的最外面，包裹一层。
import { Provider } from 'react-redux'

import App from './App';
import reducer from './reducer';

// Store 由 Redux 提供的createStore方法生成，该方法接受reducer作为参数。
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
