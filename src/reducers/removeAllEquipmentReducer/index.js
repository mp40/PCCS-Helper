export const removeAllEquipmentReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    equipment: [] } });
