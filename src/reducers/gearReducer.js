import { combineReducers } from 'redux';

const modifyEquipment = (equipArray = [], action) => {
    if (action.type === 'MODIFY_EQUIPMENT'){
        return action.payload
    }
    return equipArray
}

const changeUniform = (uniform = 'Normal', action) => {
    if (action.type === 'CHANGE_UNIFORM'){
        return action.payload
    }
    return uniform
}

export default combineReducers({
    uniform: changeUniform,
    equipment: modifyEquipment
})


