export const removeEquipmentReducer = (state, action) => {
  const equipmentToRemove = action.payload;

  const newEquipment = state.currentCharacter.equipment.filter((item) => item.name !== equipmentToRemove);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      equipment: newEquipment } };
};
