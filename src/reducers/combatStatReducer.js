const updateCombatStats = (stats = {}, action) => {
    if (action.type === 'UPDATE_ALL_COMBAT_STATS'){
        return action.payload
    }
    return stats
}

export default updateCombatStats