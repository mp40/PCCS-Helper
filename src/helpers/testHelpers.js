import React from 'react';
import App from '../App';
import {mount} from 'enzyme'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import {initialStore} from '../helpers/initialStore';

export const mountAppWithStore = (mockStore = initialStore) => {

    const store = createStore(reducers, mockStore, applyMiddleware(thunk))

    return mount(
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

export const storeWithEquipment = {
    currentView: 'home',
    totalWeight: 0,
    characterStats:{},
    combatStats: {
        baseSpeed: 0,
        maxSpeed: 0,
        SAL: 0, 
        CE: 0, 
        ISF: 0, 
        ASF: 0,
        knockoutValue: 0,
        damageBonus: 0,
        combatActions: [0, 0],
    },
    gear: {
        equipment: [{name:'newEquipment', weight:1337, qty: 1, tags:['test']}]
    }
}

export const storeWithCreateCharacterView = {
    currentView: 'createChar',
    totalWeight: 0,
    characterStats:{},
    combatStats: {
        baseSpeed: 0,
        maxSpeed: 0,
        SAL: 0, 
        CE: 0, 
        ISF: 0, 
        ASF: 0,
        knockoutValue: 0,
        damageBonus: 0,
        combatActions: [0, 0],
    },
}
