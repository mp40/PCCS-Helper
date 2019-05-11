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

export const storeWithEquipment = () => {
    return {
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
}

export const storeWithCreateCharacterView = () => {
    return {
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
        }
    }
}

export const testM1911A1 = () => {
    return {
        name: 'M1911A1',	
        type: ['Automatic Pistol', 'USA', 'Cold War', 'WW2', '.45 ACP', 'West Is Best'],
        qty: 1,								
        length: 8,									
        weight: 3,									
        rt:	4,									
        rof: '*',									
        mag: [{type: 'Mag',	weight: 0.7, cap: 7, qty: 2}],					
        kd:	5,								
        sab: 5,									
        aim: {
            ac:[1,2,3,4,5,6],
            mod:[-18,-11,-10,-9,-8,-7]
        },
        projectiles: [
            {
                type: 'FMJ',
                pen:[1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],	
                dc:[3, 3 ,2, 1, 1, 1, 1, 1]
            },
            {
                type: 'JHP',
                pen:[1.5, 1.4, 1.2, .9, .7, .3, .1, .1],	
                dc:[4, 4, 3, 2, 1, 1, 1, 1]
            },
            {
                type: 'AP',
                pen:[2.2, 2.1, 1.8, 1.4, 1.1, .5, .2, .1],	
                dc:[3, 3 ,2, 1, 1, 1, 1, 1]
            },
        ],
        ba:[45, 36, 27, 20, 15, 5, 0, -4],
        tof:[1, 2, 3, 5, 8, 19, 31, 45],
        offical: true
    }
}

export const storeWithCreateCharacterViewAndM1911A1 = () => {
    return {
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
        gear: {
            equipment: [{name:'newEquipment', weight:1337, qty: 1, tags:['test']}],
            firearms: [testM1911A1()]
        }
    }
}

