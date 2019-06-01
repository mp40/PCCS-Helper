export const modifyEquipmentReducer = (equipArray = [], action) => {
  if (action.type === 'MODIFY_EQUIPMENT') {
    return action.payload;
  }
  return equipArray;
};

export const changeUniformReducer = (uniform = 'Normal', action) => {
  if (action.type === 'CHANGE_UNIFORM') {
    return action.payload;
  }
  return uniform;
};

export const firearmsReducer = (firearmArray = [], action) => {
  if (action.type === 'MODIFY_FIREARMS') {
    return action.payload;
  }
  return firearmArray;
};
