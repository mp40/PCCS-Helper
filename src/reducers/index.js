import { initialStore } from '../helpers/initialStore';
import { isValidCombatLevel, isValidAttributeStat } from './gaurds';
import { modifyGunCombatLevelReducer } from './gunCombatLevelReducer';
import { modifyMeleeCombatLevelReducer } from './meleeCombatLevelReducer';
import { modifyStrengthValueReducer } from './strengthStatReducer';
import { modifyIntelligenceValueReducer } from './intelligenceStatReducer';
import { modifyHealthValueReducer } from './healthStatReducer';
import { modifyWillpowerValueReducer } from './willpowerStatReducer';
import { modifyAgilityValueReducer } from './agilityStatReducer';
import { changeUniformReducer } from './uniformReducer';

const initialState = initialStore;

function reduceActions(state = initialState, action) {
  if (action.type === 'GUN_COMBAT_LEVEL_UPDATED') {
    return isValidCombatLevel(action.payload) ? modifyGunCombatLevelReducer(state, action) : { ...state };
  }
  if (action.type === 'MELEE_COMBAT_LEVEL_UPDATED') {
    return isValidCombatLevel(action.payload) ? modifyMeleeCombatLevelReducer(state, action) : { ...state };
  }
  if (action.type === 'STRENGTH_VALUE_UPDATED') {
    return isValidAttributeStat(action.payload) ? modifyStrengthValueReducer(state, action) : { ...state };
  }
  if (action.type === 'INTELLIGENCE_VALUE_UPDATED') {
    return isValidAttributeStat(action.payload) ? modifyIntelligenceValueReducer(state, action) : { ...state };
  }
  if (action.type === 'HEALTH_VALUE_UPDATED') {
    return isValidAttributeStat(action.payload) ? modifyHealthValueReducer(state, action) : { ...state };
  }
  if (action.type === 'WILLPOWER_VALUE_UPDATED') {
    return isValidAttributeStat(action.payload) ? modifyWillpowerValueReducer(state, action) : { ...state };
  }
  if (action.type === 'AGILITY_VALUE_UPDATED') {
    return isValidAttributeStat(action.payload) ? modifyAgilityValueReducer(state, action) : { ...state };
  }
  if (action.type === 'UNIFORM_CHANGED') {
    return changeUniformReducer(state, action);
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
    case 'MODIFY_FIREARMS':
      return { ...state, gear: { ...state.gear, firearms: action.payload } };
    default: return state;
  }
}

export default reduceActions;
