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

export const changeUniform = (newUniform, newWeight, attributeObj) => (dispatch) => {
  dispatch({
    type: 'CHANGE_UNIFORM',
    payload: newUniform,
  });
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
