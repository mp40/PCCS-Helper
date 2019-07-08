export const correctFloatingPoint = number => Math.round(number * 1000) / 1000;

export const returnUpdatedWeightAndFirearms = (state, newTotalWeight, updatedFirearmsArray) => ({ ...state,
  totalWeight: correctFloatingPoint(newTotalWeight),
  gear: { ...state.gear,
    firearms: updatedFirearmsArray } });
