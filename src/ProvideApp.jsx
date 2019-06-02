import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

const ProvideApp = store => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ProvideApp;
