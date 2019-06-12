import { initialStore } from '../helpers/initialStore';
import { modifyGunCombatLevelReducer } from './gunCombatLevelReducer';
import { modifyMeleeCombatLevelReducer } from './meleeCombatLevelReducer';
import { modifyStrengthValueReducer } from './strengthStatReducer';
import { modifyIntelligenceValueReducer } from './intelligenceStatReducer';
import { modifyHealthValueReducer } from './healthStatReducer';
import { modifyWillpowerValueReducer } from './willpowerStatReducer';
import { modifyAgilityValueReducer } from './agilityStatReducer';

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
    return modifyIntelligenceValueReducer(state, action);
  }
  if (action.type === 'HEALTH_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    return modifyHealthValueReducer(state, action);
  }
  if (action.type === 'WILLPOWER_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    return modifyWillpowerValueReducer(state, action);
  }
  if (action.type === 'AGILITY_VALUE_UPDATED') {
    if (action.payload < 3 || action.payload > 19) {
      return { ...state };
    }
    return modifyAgilityValueReducer(state, action);
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
