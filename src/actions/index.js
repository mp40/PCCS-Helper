// action creator 

export const selectCurrentView = (view) => {
    //return an action
    return {
        type: 'VIEW_SELECTED',
        payload: view
    }
}

