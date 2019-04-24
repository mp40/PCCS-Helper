import React from 'react';
import App from '../App';
import {mount} from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from '../reducers'

export const mountAppWithStore = () => {

    const store = createStore(reducers)

    return mount(
        <Provider store={store}>
            <App/>
        </Provider>
    )
};
