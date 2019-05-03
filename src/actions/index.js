const { calculateStateObject } = require("../helpers/helperFunctions");

export const selectCurrentView = (view) => {
    return {
        type: 'VIEW_SELECTED',
        payload: view
    }
}

export const updateWeight = (attributeObj, newWeight) => {
    return (dispatch) => {
        dispatch({
            type: 'TOTAL_WEIGHT',
            payload: newWeight
        })
        dispatch(updateCombatStats(attributeObj, newWeight))
    }
}

export const updateAttributes = (attributeObj, weight) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_ATTRIBUTES',
            payload: attributeObj
        })
        dispatch(updateCombatStats(attributeObj, weight))
    }
}

export const updateCombatStats = (attributeObj, weight=0) => {
    console.log('called', weight)
    const newCombatData = calculateStateObject(attributeObj, weight)
    return {
        type: 'UPDATE_ALL_COMBAT_STATS',
        payload: newCombatData
    }
}

export const modifyEquipment = (newWeight, equipArray) => {
    return (dispatch) => {
        dispatch({type:'MODIFY_EQUIPMENT', payload: equipArray})
        dispatch(updateWeight(newWeight))
    }
}

