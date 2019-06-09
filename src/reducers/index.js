import { initialStore } from '../helpers/initialStore';

const {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions,
  calcKV,
  calcDB,
  calculateStateObject,
  actionsPerImpulse,
} = require('../helpers/helperFunctions');

const initialState = initialStore;

function reduceActions(state = initialState, action) {
  if (action.type === 'GUN_COMBAT_LEVEL_UPDATED') {
    if (action.payload < 0) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.gunLevel = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, gunLevel: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'MELEE_COMBAT_LEVEL_UPDATED') {
    if (action.payload < 0) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.handLevel = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, handLevel: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'STRENGTH_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.str = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, str: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'INTELLIGENCE_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.int = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, int: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'HEALTH_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.hlt = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, hlt: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'WILLPOWER_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.wil = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, wil: action.payload }, combatStats: newCombatStats };
  }
  if (action.type === 'AGILITY_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newState = { ...state };
    newState.characterStats.agi = action.payload;
    const newCombatStats = calculateStateObject(newState.characterStats, newState.totalWeight);
    return { ...state, characterStats: { ...state.characterStats, agi: action.payload }, combatStats: newCombatStats };
  }
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
