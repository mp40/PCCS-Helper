
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

export const modifyEquipment = (newWeight, equipArray) => {
    return (dispatch) => {
        dispatch({type:'MODIFY_EQUIPMENT', payload: equipArray})
        dispatch(updateWeight(newWeight))
    }
}
