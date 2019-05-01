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

export const updateAttributes = (attributeObj) => {
    console.log("UPDATE_ATTRIBUTES", attributeObj)
    return {
        type: 'UPDATE_ATTRIBUTES',
        payload: attributeObj
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

