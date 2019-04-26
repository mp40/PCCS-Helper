import { combineReducers } from 'redux';


const viewSelectReducer = (selectedView = 'home', action) => {
    if (action.type === 'VIEW_SELECTED'){
        return action.payload
    }
    return selectedView
}

const updateWeightReducer = (totalWeight = 0, action) => {
    if (action.type === 'TOTAL_WEIGHT'){
        return action.payload
    }
    return totalWeight
}

const addEquipment = (equipArray = [], action) => {
    if (action.type === 'ADD_EQUIPMENT'){
        return action.payload
    }
    return equipArray
}

export default combineReducers({
    currentView: viewSelectReducer,
    totalWeight: updateWeightReducer,
    gear: {
        equipment: addEquipment
    }
})