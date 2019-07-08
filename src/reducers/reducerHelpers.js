export const correctFloatingPoint = number => Math.round(number * 1000) / 1000;

const returnUpdatedWeightAndGearArray = arrayToUpdate => (state, newTotalWeight, updatedArray) => ({ ...state,
  totalWeight: correctFloatingPoint(newTotalWeight),
  gear: { ...state.gear,
    [arrayToUpdate]: updatedArray } });

export const returnUpdatedWeightAndEquipment = returnUpdatedWeightAndGearArray('equipment');
export const returnUpdatedWeightAndFirearms = returnUpdatedWeightAndGearArray('firearms');

const incrementQuantity = incrementer => (array, targetName) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

export const returnUpdatedWeightAndArray = (state, payload, incrementer, arrayName) => {
  const newArray = incrementQuantity(incrementer)(state.gear[arrayName], payload.name);
  const newTotalWeight = state.totalWeight + (payload.weight * incrementer);
  return returnUpdatedWeightAndGearArray(arrayName)(state, newTotalWeight, newArray);
};
