import { initialStore } from '../helpers/initialStore';
import { modifyGunCombatLevelReducer } from './gunCombatLevelReducer';
import { modifyMeleeCombatLevelReducer } from './meleeCombatLevelReducer';
import { modifyStrengthValueReducer } from './strengthStatReducer';
import { modifyIntelligenceValueReducer } from './intelligenceStatReducer';
import { modifyHealthValueReducer } from './healthStatReducer';
import { modifyWillpowerValueReducer } from './willpowerStatReducer';
import { modifyAgilityValueReducer } from './agilityStatReducer';
import { changeUniformReducer } from './uniformReducer';
import { addEquipmentReducer } from './addEquipmentReducer';
import { removeEquipmentReducer } from './removeEquipmentReducer';
import { removeAllEquipmentReducer } from './removeAllEquipmentReducer';
import { increaseEquipmentReducer } from './increaseEquipmentReducer';
import { decreaseEquipmentReducer } from './decreaseEquipmentReducer';

const initialState = initialStore;

function reduceActions(state = initialState, action) {
  switch (action.type) {
    case 'VIEW_SELECTED':
      return { ...state, currentView: action.payload };
    case 'GUN_COMBAT_LEVEL_UPDATED':
      return modifyGunCombatLevelReducer(state, action);
    case 'MELEE_COMBAT_LEVEL_UPDATED':
      return modifyMeleeCombatLevelReducer(state, action);
    case 'STRENGTH_VALUE_UPDATED':
      return modifyStrengthValueReducer(state, action);
    case 'INTELLIGENCE_VALUE_UPDATED':
      return modifyIntelligenceValueReducer(state, action);
    case 'HEALTH_VALUE_UPDATED':
      return modifyHealthValueReducer(state, action);
    case 'WILLPOWER_VALUE_UPDATED':
      return modifyWillpowerValueReducer(state, action);
    case 'AGILITY_VALUE_UPDATED':
      return modifyAgilityValueReducer(state, action);
    case 'UNIFORM_CHANGED':
      return changeUniformReducer(state, action);
    case 'EQUIPMENT_ADDED':
      return addEquipmentReducer(state, action);
    case 'EQUIPMENT_REMOVED':
      return removeEquipmentReducer(state, action);
    case 'ALL_EQUIPMENT_REMOVED':
      return removeAllEquipmentReducer(state, action);
    case 'EQUIPMENT_QTY_INCREASED':
      return increaseEquipmentReducer(state, action);
    case 'EQUIPMENT_QTY_DECREASED':
      return decreaseEquipmentReducer(state, action);
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
