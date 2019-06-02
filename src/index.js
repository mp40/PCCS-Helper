import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import ProvideApp from './ProvideApp';

import { initialStore } from './helpers/initialStore';

import './index.css';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialStore, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  ProvideApp(store),
  document.getElementById('root'),
);
