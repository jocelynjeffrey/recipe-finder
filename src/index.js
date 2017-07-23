import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { saveState } from './localStorage.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import throttle from 'lodash/throttle';
import 'rxjs';

import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(createEpicMiddleware(rootEpic), loggerMiddleware)
);

store.subscribe(throttle(() => {
  saveState({
    favourites: store.getState().recipe.favourites
  })
}, 1000));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();