const { calculateStateObject } = require('../helpers/helperFunctions');

export const selectCurrentView = view => ({
  type: 'VIEW_SELECTED',
  payload: view,
});

export const updateCombatStats = (attributeObj, weight = 0) => {
  const newCombatData = calculateStateObject(attributeObj, weight);
  return {
    type: 'UPDATE_ALL_COMBAT_STATS',
    payload: newCombatData,
  };
};

export const updateWeight = (newWeight, attributeObj) => (dispatch) => {
  dispatch({
    type: 'TOTAL_WEIGHT',
    payload: newWeight,
  });
  dispatch(updateCombatStats(attributeObj, newWeight));
};

export const updateAttributes = (attributeObj, weight) => (dispatch) => {
  dispatch({
    type: 'UPDATE_ATTRIBUTES',
    payload: attributeObj,
  });
  dispatch(updateCombatStats(attributeObj, weight));
};

export const modifyFirearmList = (newWeight, firearmsArray, attributeObj) => (dispatch) => {
  dispatch({ type: 'MODIFY_FIREARMS', payload: firearmsArray });
  dispatch(updateWeight(newWeight, attributeObj));
};

export const modifyGunCombatLevel = newGunCombatLevel => ({
  type: 'GUN_COMBAT_LEVEL_UPDATED',
  payload: newGunCombatLevel,
});

export const modifyMeleeCombatLevel = newMeleeCombatLevel => ({
  type: 'MELEE_COMBAT_LEVEL_UPDATED',
  payload: newMeleeCombatLevel,
});

export const modifyStrengthValue = newStrengthValue => ({
  type: 'STRENGTH_VALUE_UPDATED',
  payload: newStrengthValue,
});

export const modifyIntelligenceValue = newIntelligenceValue => ({
  type: 'INTELLIGENCE_VALUE_UPDATED',
  payload: newIntelligenceValue,
});

export const modifyHealthValue = newHealthValue => ({
  type: 'HEALTH_VALUE_UPDATED',
  payload: newHealthValue,
});

export const modifyWillpowerValue = newWillpowerValue => ({
  type: 'WILLPOWER_VALUE_UPDATED',
  payload: newWillpowerValue,
});

export const modifyAgilityValue = newAgilityValue => ({
  type: 'AGILITY_VALUE_UPDATED',
  payload: newAgilityValue,
});

export const changeUniform = newUniform => ({
  type: 'UNIFORM_CHANGED',
  payload: newUniform,
});

export const addEquipment = equipment => ({
  type: 'EQUIPMENT_ADDED',
  payload: equipment,
});

export const removeEquipment = equipment => ({
  type: 'EQUIPMENT_REMOVED',
  payload: equipment,
});

export const removeAllEquipment = emptyArray => ({
  type: 'ALL_EQUIPMENT_REMOVED',
  payload: emptyArray,
});

export const increaseEquipmentQty = equipment => ({
  type: 'EQUIPMENT_QTY_INCREASED',
  payload: equipment,
});

export const decreaseEquipmentQty = equipment => ({
  type: 'EQUIPMENT_QTY_DECREASED',
  payload: equipment,
});

export const addFirearm = firearm => ({
  type: 'FIREARM_ADDED',
  payload: firearm,
});

export const removeFirearm = firearm => ({
  type: 'FIREARM_REMOVED',
  payload: firearm,
});

export const removeAllFirearms = emptyArray => ({
  type: 'ALL_FIREARMS_REMOVED',
  payload: emptyArray,
});

export const increaseFirearmQty = firearm => ({
  type: 'FIREARM_QTY_INCREASED',
  payload: firearm,
});

export const decreaseFirearmQty = firearm => ({
  type: 'FIREARM_QTY_DECREASED',
  payload: firearm,
});

export const increaseMagazineQty = firearmAndMagazine => ({
  type: 'MAGAZINE_QTY_INCREASED',
  payload: firearmAndMagazine,
});

export const decreaseMagazineQty = firearmAndMagazine => ({
  type: 'MAGAZINE_QTY_DECREASED',
  payload: firearmAndMagazine,
});

export const modifyFirearm = firearmNameAndModification => ({
  type: 'FIREARM_MODIFIED',
  payload: firearmNameAndModification,
});

export const removeFirearmModification = firearmNameAndModification => ({
  type: 'FIREARM_MODIFICATION_REMOVED',
  payload: firearmNameAndModification,
});

export const addCustomMagazine = customMagazine => ({
  type: 'CUSTOM_MAGAZINE_ADDED',
  payload: customMagazine,
});

export const removeAllModificationsFromFirearm = firearm => ({
  type: 'ALL_FIREARM_MODIFICATIONS_REMOVED',
  payload: firearm,
});
