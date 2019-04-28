import { combineReducers } from 'redux';

const modifyEquipment = (equipArray = [], action) => {
    if (action.type === 'MODIFY_EQUIPMENT'){
        return action.payload
    }
    return equipArray
}

export default combineReducers({
    equipment: modifyEquipment
})


