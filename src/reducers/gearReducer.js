import { combineReducers } from 'redux';

const addEquipment = (equipArray = [], action) => {
    console.log('reducer fired')
    if (action.type === 'ADD_EQUIPMENT'){
        return action.payload
    }
    return equipArray
}

export default combineReducers({
    equipment: addEquipment
})