export const selectCurrentView = (view) => {
    return {
        type: 'VIEW_SELECTED',
        payload: view
    }
}

export const updateWeight = (newWeight) => {
    return {
        type: 'TOTAL_WEIGHT',
        payload: newWeight
    }
}

export const updateAttributes = (attributeObj, attribute, value) => {
    const newObj = attributeObj
    newObj[attribute] = value
    return {
        type: 'UPDATE_ATTRIBUTES',
        payload: newObj
    }
}

export const updateCombatStats = (combatStatObject) => {
    return {
        type: 'UPDATE_ALL_COMBAT_STATS',
        payload: combatStatObject
    }
}

export const modifyEquipment = (newWeight, equipArray) => {
    return (dispatch) => {
        dispatch({type:'MODIFY_EQUIPMENT', payload: equipArray})
        dispatch(updateWeight(newWeight))
    }
}

