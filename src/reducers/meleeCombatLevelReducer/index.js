const {
  findHighestCombatLevel,
  findSAL,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
} = require('../../helpers/helperFunctions');

export const modifyMeleeCombatLevelReducer = (state, action) => {
  const newCombatEfficency = findSAL(action.payload);
  const newAgilitySkillFactor = calcSkillFactor(state.currentCharacter.agi, newCombatEfficency);
  const newDamageBonus = calcDB(state.currentCharacter.maxSpeed, newAgilitySkillFactor);
  const newMeleeCombatActions = calcCombatActions(state.currentCharacter.maxSpeed, newAgilitySkillFactor);
  const highestCombatSkill = findHighestCombatLevel(state.currentCharacter.gunLevel, action.payload);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      handLevel: action.payload,
      CE: newCombatEfficency,
      ASF: newAgilitySkillFactor,
      damageBonus: newDamageBonus,
      knockoutValue: calcKV(state.currentCharacter.wil, highestCombatSkill),
      handCombatActions: newMeleeCombatActions } };
};
