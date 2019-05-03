import { combineReducers } from 'redux';
import gearReducer from './gearReducer';
import characterStatReducer from './characterStatReducer';
import combatStatReducer from './combatStatReducer';

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

// export default combineReducers({
//     currentView: viewSelectReducer,
//     totalWeight: updateWeightReducer,
//     characterStats: characterStatReducer,
//     combatStats: combatStatReducer,
//     gear: gearReducer
// })

export default combineReducers({
    currentView: viewSelectReducer,
    totalWeight: updateWeightReducer,
    characterStats: characterStatReducer,
    combatStats: combatStatReducer,
    gear: gearReducer
})
