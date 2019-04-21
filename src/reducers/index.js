import { combineReducers } from 'redux';


const viewSelectReducer = (selectedView = 'home', action) => {
    if (action.type === 'VIEW_SELECTED'){
        return action.payload
    }
    return selectedView
}

export default combineReducers({
    currentView: viewSelectReducer
})