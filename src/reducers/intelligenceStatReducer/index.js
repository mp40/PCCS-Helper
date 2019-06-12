const {
  calcSkillFactor,
  calcCombatActions,
} = require('../../helpers/helperFunctions');

export const modifyIntelligenceValueReducer = (state, action) => {
  const newGunCombatActions = calcCombatActions(
    state.combatStats.maxSpeed, calcSkillFactor(action.payload, state.combatStats.SAL),
  );
  return { ...state,
    characterStats:
      { ...state.characterStats, int: action.payload },
    combatStats: { ...state.combatStats,
      ISF: calcSkillFactor(action.payload, state.combatStats.SAL),
      combatActions:
          [newGunCombatActions, ...state.combatStats.combatActions.slice(0, 1)] } };
};
