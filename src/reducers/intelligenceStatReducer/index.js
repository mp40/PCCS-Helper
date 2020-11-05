const {
  calcSkillFactor,
  calcCombatActions,
} = require('../../helpers/helperFunctions');

export const modifyIntelligenceValueReducer = (state, action) => {
  const newGunCombatActions = calcCombatActions(
    state.currentCharacter.maxSpeed, calcSkillFactor(action.payload, state.currentCharacter.SAL),
  );

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      int: action.payload,
      ISF: calcSkillFactor(action.payload, state.currentCharacter.SAL),
      gunCombatActions: newGunCombatActions } };
};
