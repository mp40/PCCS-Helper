import { getInitialReduxState } from '../helpers/initialStore';
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
import { removeAllWeaponsReducer } from './removeAllWeaponsReducer';
import { increaseFirearmReducer } from './increaseFirearmReducer';
import { decreaseFirearmReducer } from './decreaseFirearmReducer';
import { increaseMagazineReducer } from './increaseMagazineReducer';
import { decreaseMagazineReducer } from './decreaseMagazineReducer';
import { modifyFirearmReducer } from './modifyFirearmReducer';
import { removeFirearmModificationReducer } from './removeFirearmModificationReducer';
import { addCustomMagazineReducer } from './addCustomMagazineReducer';
import { removeAllFirearmModificationsReducer } from './removeAllFirearmModificationsReducer';
import { setPrimaryMagazineReducer } from './setPrimaryMagazineReducer';
import { removeMagazineReducer } from './removeMagazineReducer';
import { replaceMagazineReducer } from './replaceMagazineReducer';
import { changeHelmetReducer } from './changeHelmetReducer';
import { changeVestReducer } from './changeVestReducer';
import { addGrenadeReducer } from './addGrenadeReducer';
import { removeGrenadeReducer } from './removeGrenadeReducer';
import { increaseGrenadeReducer } from './increaseGrenadeReducer';
import { decreaseGrenadeReducer } from './decreaseGrenadeReducer';
import { changeNameReducer } from './changeNameReducer';
import { addLauncherReducer } from './addLauncherReducer';
import { removeLauncherReducer } from './removeLauncherReducer';
import { increaseLauncherReducer } from './increaseLauncherReducer';
import { decreaseLauncherReducer } from './decreaseLauncherReducer';
import { increaseLauncherAmmoReducer } from './increaseLauncherAmmoReducer';
import { decreaseLauncherAmmoReducer } from './decreaseLauncherAmmoReducer';
import { updateSavedCharactersReducer } from './updateSavedCharactersReducer';
import { addSavedCharacterReducer } from './addSavedCharacterReducer';
import { updateSavedCharacterReducer } from './updateSavedCharacterReducer';
import { hydrateCurrentCharacterReducer } from './hydrateCurrentCharacterReducer';
import { updateOpticReducer } from './updateOpticReducer';
import { removeOpticReducer } from './removeOpticReducer';
import { updateUnderslungLauncherReducer } from './updateUnderslungLauncherReducer';
import { removeUnderslungLauncherReducer } from './removeUnderslungLauncherReducer';
import { decreaseUnderslungLauncherAmmoReducer } from './decreaseUnderslungLauncherAmmoReducer';
import { increaseUnderslungLauncherAmmoReducer } from './increaseUnderslungLauncherAmmoReducer';

const initialState = getInitialReduxState();

// eslint-disable-next-line default-param-last
const reduceActions = (state = initialState, action) => {
  switch (action.type) {
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
      return removeAllEquipmentReducer(state);
    case 'EQUIPMENT_QTY_INCREASED':
      return increaseEquipmentReducer(state, action);
    case 'EQUIPMENT_QTY_DECREASED':
      return decreaseEquipmentReducer(state, action);
    case 'FIREARM_ADDED':
      return addFirearmReducer(state, action);
    case 'FIREARM_REMOVED':
      return removeFirearmReducer(state, action);
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
    case 'PRIMARY_MAGAZINE_SET':
      return setPrimaryMagazineReducer(state, action);
    case 'MAGAZINE_REMOVED':
      return removeMagazineReducer(state, action);
    case 'MAGAZINE_REPLACED':
      return replaceMagazineReducer(state, action);
    case 'OPTIC_UPDATED':
      return updateOpticReducer(state, action);
    case 'OPTIC_REMOVED':
      return removeOpticReducer(state, action);
    case 'UNDERSLUNG_LAUNCHER_UPDATED':
      return updateUnderslungLauncherReducer(state, action);
    case 'UNDERSLUNG_LAUNCHER_REMOVED':
      return removeUnderslungLauncherReducer(state, action);
    case 'UNDERSLUNG_LAUNCHER_AMMO_QTY_DECREASED':
      return decreaseUnderslungLauncherAmmoReducer(state, action);
    case 'UNDERSLUNG_LAUNCHER_AMMO_QTY_INCREASED':
      return increaseUnderslungLauncherAmmoReducer(state, action);
    case 'ALL_WEAPONS_REMOVED':
      return removeAllWeaponsReducer(state);
    case 'GRENADE_ADDED':
      return addGrenadeReducer(state, action);
    case 'GRENADE_REMOVED':
      return removeGrenadeReducer(state, action);
    case 'GRENADE_QTY_INCREASED':
      return increaseGrenadeReducer(state, action);
    case 'GRENADE_QTY_DECREASED':
      return decreaseGrenadeReducer(state, action);
    case 'LAUNCHER_ADDED':
      return addLauncherReducer(state, action);
    case 'LAUNCHER_REMOVED':
      return removeLauncherReducer(state, action);
    case 'LAUNCHER_QTY_INCREASED':
      return increaseLauncherReducer(state, action);
    case 'LAUNCHER_QTY_DECREASED':
      return decreaseLauncherReducer(state, action);
    case 'LAUNCHER_AMMO_QTY_INCREASED':
      return increaseLauncherAmmoReducer(state, action);
    case 'LAUNCHER_AMMO_QTY_DECREASED':
      return decreaseLauncherAmmoReducer(state, action);
    case 'CHARACTER_NAME_CHANGED':
      return changeNameReducer(state, action);
    case 'HELMET_CHANGED':
      return changeHelmetReducer(state, action);
    case 'VEST_CHANGED':
      return changeVestReducer(state, action);
    case 'CHARACTERS_UPDATED':
      return updateSavedCharactersReducer(state, action);
    case 'CHARACTER_ADDED':
      return addSavedCharacterReducer(state, action);
    case 'CHARACTER_UPDATED':
      return updateSavedCharacterReducer(state, action);
    case 'CURRENT_CHARACTER_HYDRATED':
      return hydrateCurrentCharacterReducer(state, action);
    default: return state;
  }
};

export default reduceActions;
