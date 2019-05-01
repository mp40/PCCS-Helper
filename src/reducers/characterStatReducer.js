import { combineReducers } from 'redux';

// const updateAttribute = (attributes = {}, action) => {
//     console.log("update attribute", attributes, action)
//     switch(action.type){
//         case 'UPDATE_STR':
//         console.log('firing reducer str')
//             return {str: action.payload};
//         case 'UPDATE_INT':
//             return {int: action.payload};
//         case 'UPDATE_WIL':
//             return {wil: action.payload};
//         case 'UPDATE_HLT':
//             return {hlt: action.payload};    
//         case 'UPDATE_AGI':
//             return {agi: action.payload};
//         case 'UPDATE_GUN':
//             return {gunLevel: action.payload};
//         case 'UPDATE_HAND':
//             return {handLevel: action.payload};    
//         default:
//             return attributes 
//     }
// }

// const strReducer = (str = 0, action) => {
//     console.log('Reducer!')
//     if (action.type === 'UPDATE_STR'){
//         return action.payload
//     }
//     return str
// }

// const intReducer = (int = 0, action) => {
//     if (action.type === 'UPDATE_INT'){
//         return action.payload
//     }
//     return int
// }

// const wilReducer = (wil = 0, action) => {
//     if (action.type === 'UPDATE_WIL'){
//         return action.payload
//     }
//     return wil
// }

// const hltReducer = (hlt = 0, action) => {
//     if (action.type === 'UPDATE_INT'){
//         return action.payload
//     }
//     return hlt
// }

// const agiReducer = (agi = 0, action) => {
//     if (action.type === 'UPDATE_WIL'){
//         return action.payload
//     }
//     return agi
// }

// const gunReducer = (gun = 0, action) => {
//     if (action.type === 'UPDATE_INT'){
//         return action.payload
//     }
//     return gun
// }

const defaultStats = {
    str: 10,
    int: 10,
    wil: 10,
    hlt: 10,
    agi: 10,
    gunLevel: 0,
    handLevel: 0,
}
const updateAttributes = (obj=defaultStats, action) => {
    if (action.type === 'UPDATE_ATTRIBUTES'){
        return action.payload
    }
    return obj
}

export default combineReducers({
    characterStats: updateAttributes
})


