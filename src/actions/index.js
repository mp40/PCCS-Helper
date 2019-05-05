const { calculateStateObject } = require("../helpers/helperFunctions");

export const selectCurrentView = (view) => {
    return {
        type: 'VIEW_SELECTED',
        payload: view
    }
}

export const updateWeight = (newWeight, attributeObj) => {
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
    const newCombatData = calculateStateObject(attributeObj, weight)
    return {
        type: 'UPDATE_ALL_COMBAT_STATS',
        payload: newCombatData
    }
}

export const modifyEquipment = (newWeight, equipArray, attributeObj) => {
    return (dispatch) => {
        dispatch({type:'MODIFY_EQUIPMENT', payload: equipArray})
        dispatch(updateWeight(newWeight, attributeObj))
    }
}

export const changeUniform = (newUniform, newWeight, attributeObj) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_UNIFORM',
            payload: newUniform
        })
        dispatch(updateWeight(newWeight, attributeObj))
    }
}

export const modifyFirearmList = (newWeight, firearmsArray, attributeObj) => {
    return (dispatch) => {
        dispatch({type:'MODIFY_FIREARMS', payload: firearmsArray})
        dispatch(updateWeight(newWeight, attributeObj))
    }
}

