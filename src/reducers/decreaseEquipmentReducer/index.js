export const decreaseEquipmentReducer = (state, action) => {
  const newEquipment = state.currentCharacter.equipment.map((item) => {
    if (item.name === action.payload) {
      return { ...item, qty: item.qty - 1 };
    }
    return item;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,

      equipment: newEquipment } };
};
