const {
  findHighestCombatLevel,
  calcKV,
} = require('../../helpers/helperFunctions');

export const modifyWillpowerValueReducer = (state, action) => {
  const highestCombatSkill = findHighestCombatLevel(state.currentCharacter.gunLevel, state.currentCharacter.handLevel);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      wil: action.payload,
      knockoutValue: calcKV(action.payload, highestCombatSkill) } };
};
