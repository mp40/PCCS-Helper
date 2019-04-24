import React from 'react';
// import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducers from './reducers';

const ProviderApp = () => {
    return (
        <Provider store={createStore(reducers)}>
            <App/>
        </Provider>
    )
}

export default ProviderApp