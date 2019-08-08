export const initialStore = {
  currentView: 'home',
  totalWeight: 0,
  characterStats: {
    str: 10,
    int: 10,
    hlt: 10,
    wil: 10,
    agi: 10,
    gunLevel: 0,
    handLevel: 0,
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
    uniform: 'Normal',
    // helmet: 'None', TODO
    // bodyArmour: 'None', TODO
    equipment: [],
    firearms: [],
    grenades: [],
  },
};

// possibly migrate to this shape
// export const initialStore = {
//   currentView: 'home',
//   characterDetails: {
//     str: 10,
//     int: 10,
//     hlt: 10,
//     wil: 10,
//     agi: 10,
//     gunLevel: 0,
//     handLevel: 0,
//     totalWeight: 0,
//     baseSpeed: 0,
//     maxSpeed: 0,
//     SAL: 0,
//     CE: 0,
//     ISF: 0,
//     ASF: 0,
//     knockoutValue: 0,
//     damageBonus: 0,
//     gunCombatAction:0,
//     handCombatActions:0,
//     uniform: 'Normal',
//     equipment: [],
//     firearms:[],
//     greanades:[],
//     helmet: undefined,
//     vest: undefined,
//   }
