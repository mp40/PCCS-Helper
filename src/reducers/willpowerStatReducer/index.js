const {
  findHighestCombatLevel,
  calcKV,
} = require('../../helpers/helperFunctions');

export const modifyWillpowerValueReducer = (state, action) => {
  const highestCombatSkill = findHighestCombatLevel(state.characterStats.gunLevel, state.characterStats.handLevel);
  return { ...state,
    characterStats:
    { ...state.characterStats, wil: action.payload },
    combatStats: { ...state.combatStats, knockoutValue: calcKV(action.payload, highestCombatSkill) } };
};
