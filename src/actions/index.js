import { dispatch } from "rxjs/internal/observable/range";

// action creator 

export const selectCurrentView = (view) => {
    //return an action
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

export const addEquipment = (props, equipObj) => {
    console.log("HJG", props)
    equipObj.qty = 1
    const newWeight = props.totalWeight - equipObj.weight
    const newEquipArray = [...props.gear.equipment, equipObj]

    return (dispatch) => {
        dispatch({type:'ADD_EQUIPMENT', payload: newEquipArray})
        dispatch(updateWeight(newWeight))
    }
}