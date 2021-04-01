import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';

import ProvideApp from './ProvideApp';

import { initialStore } from './helpers/initialStore';

import './index.css';

const store = createStore(
  reducers,
  initialStore,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  ProvideApp(store),
  document.getElementById('root'),
);
