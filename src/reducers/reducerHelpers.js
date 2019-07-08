export const correctFloatingPoint = number => Math.round(number * 1000) / 1000;

export const returnUpdatedWeightAndFirearms = (state, newTotalWeight, updatedFirearmsArray) => ({ ...state,
  totalWeight: correctFloatingPoint(newTotalWeight),
  gear: { ...state.gear,
    firearms: updatedFirearmsArray } });

export const updateQuantityOfFirearm = (firearmArray, firearmName, incrementer) => firearmArray.map((element) => {
  const firearmObject = element;
  if (firearmObject.name === firearmName) {
    firearmObject.qty += incrementer;
  }
  return firearmObject;
});
