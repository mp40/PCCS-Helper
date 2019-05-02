import { combineReducers } from 'redux';

const defaultStats = {
    str: 10,
    int: 10,
    wil: 10,
    hlt: 10,
    agi: 10,
    gunLevel: 0,
    handLevel: 0,
}
const updateAttributes = (obj=defaultStats, action) => {
    console.log('called', action)
    if (action.type === 'UPDATE_ATTRIBUTES'){
        console.log('reducing', action.payload)
        return {characterStates: action.payload}
    }
    return obj
}

export default combineReducers({
    characterStats: updateAttributes
})


