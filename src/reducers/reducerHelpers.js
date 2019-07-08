export const correctFloatingPoint = number => Math.round(number * 1000) / 1000;

const returnUpdatedWeightAndGearArray = arrayToUpdate => (state, newTotalWeight, updatedArray) => ({ ...state,
  totalWeight: correctFloatingPoint(newTotalWeight),
  gear: { ...state.gear,
    [arrayToUpdate]: updatedArray } });

export const returnUpdatedWeightAndEquipment = returnUpdatedWeightAndGearArray('equipment');
export const returnUpdatedWeightAndFirearms = returnUpdatedWeightAndGearArray('firearms');

const updateQuantityOfGear = (array, targetName, incrementer) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

export const updateQuantityOfFirearm = updateQuantityOfGear;
export const updateQuantityOfEquipment = updateQuantityOfGear;
