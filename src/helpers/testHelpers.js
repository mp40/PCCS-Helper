import React from 'react';
import App from '../App';
import {mount} from 'enzyme'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import {initialStore} from '../helpers/initialStore';

export const mountAppWithStore = () => {

    const store = createStore(reducers, initialStore, applyMiddleware(thunk))

    return mount(
        <Provider store={store}>
            <App/>
        </Provider>
    )
};
