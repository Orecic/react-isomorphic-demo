import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Hello from 'containers/Hello';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from 'reducers/index';
import { StoreState } from 'types/index';

import '../index.less';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 2,
  languageName: 'Rabbit',
},composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default () =>
  <div>
    <Provider store={store}>
      <Hello />
    </Provider>
  </div>
