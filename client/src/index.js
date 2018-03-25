import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './Reducers';
import watchFetchSearchData from './Sagas.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//saga middleware
const sagaMiddleware = createSagaMiddleware();

//redux store with saga middleware
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
// activate the saga(s)
sagaMiddleware.run(watchFetchSearchData);

//fetch initial data
store.dispatch({ type: 'FETCH_SEARCH_DATA', payload: { firstName: '*' } });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
