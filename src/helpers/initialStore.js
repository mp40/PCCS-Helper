export const initialStore = {
    currentView: 'home',
    totalWeight: 0,
    characterStats:{
        // str: 0,
        // int: 0,
        // wil: 0,
        // hlt: 0,
        // agi: 0,
        // gunLevel: 0,
        // handLevel: 0,
    },
    combatStats: {
        baseSpeed: 0,
        maxSpeed: 0,
        SAL: 0, 
        CE: 0, 
        ISF: 0, 
        ASF: 0,
        knockoutValue: 0,
        damageBonus: 0,
        combatActions: [0, 0],
    },
    gear: {
        equipment: []
    }
}
