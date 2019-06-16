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

export const modifyEquipment = (newWeight, equipArray, attributeObj) => (dispatch) => {
  dispatch({ type: 'MODIFY_EQUIPMENT', payload: equipArray });
  dispatch(updateWeight(newWeight, attributeObj));
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
