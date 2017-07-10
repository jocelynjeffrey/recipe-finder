import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';

import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  // createLogger,
  applyMiddleware(createEpicMiddleware(rootEpic), loggerMiddleware)
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();