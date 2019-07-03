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
import { addFirearmReducer } from './addFirearmReducer';
import { removeFirearmReducer } from './removeFirearmReducer';
import { removeAllFirearmsReducer } from './removeAllFirearmsReducer';
import { increaseFirearmReducer } from './increaseFirearmReducer';
import { decreaseFirearmReducer } from './decreaseFirearmReducer';
import { increaseMagazineReducer } from './increaseMagazineReducer';
import { decreaseMagazineReducer } from './decreaseMagazineReducer';
import { modifyFirearmReducer } from './modifyFirearmReducer';
import { removeFirearmModificationReducer } from './removeFirearmModificationReducer';
import { addCustomMagazineReducer } from './addCustomMagazineReducer';
import { removeAllFirearmModificationsReducer } from './removeAllFirearmModificationsReducer';

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
    case 'FIREARM_ADDED':
      return addFirearmReducer(state, action);
    case 'FIREARM_REMOVED':
      return removeFirearmReducer(state, action);
    case 'ALL_FIREARMS_REMOVED':
      return removeAllFirearmsReducer(state, action);
    case 'FIREARM_QTY_INCREASED':
      return increaseFirearmReducer(state, action);
    case 'FIREARM_QTY_DECREASED':
      return decreaseFirearmReducer(state, action);
    case 'MAGAZINE_QTY_INCREASED':
      return increaseMagazineReducer(state, action);
    case 'MAGAZINE_QTY_DECREASED':
      return decreaseMagazineReducer(state, action);
    case 'FIREARM_MODIFIED':
      return modifyFirearmReducer(state, action);
    case 'FIREARM_MODIFICATION_REMOVED':
      return removeFirearmModificationReducer(state, action);
    case 'CUSTOM_MAGAZINE_ADDED':
      return addCustomMagazineReducer(state, action);
    case 'ALL_FIREARM_MODIFICATIONS_REMOVED':
      return removeAllFirearmModificationsReducer(state, action);
    case 'TOTAL_WEIGHT':
      return { ...state, totalWeight: action.payload };
    case 'UPDATE_ATTRIBUTES':
      return { ...state, characterStats: action.payload };
    case 'UPDATE_ALL_COMBAT_STATS':
      return { ...state, combatStats: action.payload };
    case 'MODIFY_FIREARMS':
      return { ...state, gear: { ...state.gear, firearms: action.payload } };
    default: return state;
  }
}

export default reduceActions;
