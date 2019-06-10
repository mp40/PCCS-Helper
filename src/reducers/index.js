import { initialStore } from '../helpers/initialStore';
import { modifyGunCombatLevelReducer } from './gunCombatLevelReducer';
import { modifyMeleeCombatLevelReducer } from './meleeCombatLevelReducer';
import { modifyStrengthValueReducer } from './strengthStatReducer';

const {
  calcBaseSpeed,
  findSAL,
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
} = require('../helpers/helperFunctions');

const initialState = initialStore;

function reduceActions(state = initialState, action) {
  if (action.type === 'GUN_COMBAT_LEVEL_UPDATED') {
    if (action.payload < 0) {
      return { ...state };
    }
    return modifyGunCombatLevelReducer(state, action);
  }
  if (action.type === 'MELEE_COMBAT_LEVEL_UPDATED') {
    if (action.payload < 0) {
      return { ...state };
    }
    return modifyMeleeCombatLevelReducer(state, action);
  }
  if (action.type === 'STRENGTH_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    return modifyStrengthValueReducer(state, action);
  }
  if (action.type === 'INTELLIGENCE_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newGunCombatActions = calcCombatActions(
      state.combatStats.maxSpeed, calcSkillFactor(action.payload, state.combatStats.SAL),
    );
    return { ...state,
      characterStats:
    { ...state.characterStats, int: action.payload },
      combatStats: { ...state.combatStats,
        ISF: calcSkillFactor(action.payload, state.combatStats.SAL),
        combatActions:
        [newGunCombatActions, ...state.combatStats.combatActions.slice(0, 1)] } };
  }
  if (action.type === 'HEALTH_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    return { ...state, characterStats: { ...state.characterStats, hlt: action.payload } };
  }
  if (action.type === 'WILLPOWER_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const highestCombatSkill = state.characterStats.gunLevel > state.characterStats.handLevel
      ? state.characterStats.gunLevel : state.characterStats.handLevel;
    return { ...state,
      characterStats:
      { ...state.characterStats, wil: action.payload },
      combatStats: { ...state.combatStats, knockoutValue: calcKV(action.payload, highestCombatSkill) } };
  }
  if (action.type === 'AGILITY_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    const newMaxSpeed = calcMaxSpeed(action.payload, state.combatStats.baseSpeed);
    const newAgilitySkillFactor = calcSkillFactor(action.payload, state.combatStats.CE);
    const newDamageBonus = calcDB(newMaxSpeed, newAgilitySkillFactor);
    const newGunCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ISF);
    const newMeleeCombatActions = calcCombatActions(newMaxSpeed, newAgilitySkillFactor);

    return { ...state,
      characterStats:
    { ...state.characterStats, agi: action.payload },
      combatStats: { ...state.combatStats,
        maxSpeed: newMaxSpeed,
        ASF: newAgilitySkillFactor,
        damageBonus: newDamageBonus,
        combatActions: [newGunCombatActions, newMeleeCombatActions] } };
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
