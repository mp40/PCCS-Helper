// import {
//   selectCurrentView,
//   updateCombatStats,
//   updateWeight,
//   updateAttributes,
//   modifyEquipment,
//   changeUniform,
//   modifyFirearmList,
//   modifyGunCombatLevel,
//   modifyMeleeCombatLevel,
// } from '../actions';

import { initialStore } from '../helpers/initialStore';

const initialState = initialStore;

function reduceActions(state = initialState, action) {
  switch (action.type) {
    case 'VIEW_SELECTED':
      return { ...state, currentView: action.payload };
    case 'TOTAL_WEIGHT':
      return { ...state, totalWeight: action.payload };
    case 'UPDATE_ATTRIBUTES':
      return { ...state, characterStats: action.payload };
    case 'UPDATE_ALL_COMBAT_STATS':
      return { ...state, combatStats: action.payload };
    case 'MODIFY_EQUIPMENT':
      return { ...state, gear: { ...state.gear, equipment: action.payload } };
    case 'CHANGE_UNIFORM':
      return { ...state, gear: { ...state.gear, uniform: action.payload } };
    case 'MODIFY_FIREARMS':
      return { ...state, gear: { ...state.gear, firearms: action.payload } };
    default: return state;
  }
}

export default reduceActions;

/*
const Store = {
  currentView: 'home',
  totalWeight: 0,
  characterStats: {},
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
    // grenades: [] TODO
  },
};
*/
