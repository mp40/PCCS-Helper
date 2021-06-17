export const hydrateCurrentCharacterReducer = (state, action) => {
  const dehydratedCharacter = action.payload;

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      characterId: dehydratedCharacter.character_id,
      name: dehydratedCharacter.character_name,
      str: dehydratedCharacter.str,
      int: dehydratedCharacter.int,
      hlt: dehydratedCharacter.hlt,
      wil: dehydratedCharacter.wil,
      agi: dehydratedCharacter.agi,
      gunLevel: dehydratedCharacter.gun_level,
      handLevel: dehydratedCharacter.hand_level,
      uniform: dehydratedCharacter.uniform,
      helmet: dehydratedCharacter.helmet || undefined,
      vest: dehydratedCharacter.vest || undefined,
      equipment: dehydratedCharacter.equipment,
      firearms: dehydratedCharacter.firearms,
      grenades: dehydratedCharacter.grenades,
      launchers: dehydratedCharacter.launchers } };
};
