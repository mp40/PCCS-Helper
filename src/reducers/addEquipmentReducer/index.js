export const addEquipmentReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    equipment: [...state.currentCharacter.equipment, action.payload] } });
