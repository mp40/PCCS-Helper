export const removeAllEquipmentReducer = (state) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    equipment: [] } });
