import { defaultSituationState } from './data';

export const updateRange = (payload) => ({
  type: 'RANGE_UPDATED',
  payload,
});

export const updateStance = (payload) => ({
  type: 'STANCE_UPDATED',
  payload,
});

export const updateTarget = (payload) => ({
  type: 'TARGET_UPDATED',
  payload,
});

export const updateMovement = (payload) => ({
  type: 'MOVEMENT_UPDATED',
  payload,
});

export const updateSituation = (payload) => ({
  type: 'SITUATION_UPDATED',
  payload,
});

export const updateVisibility = (payload) => ({
  type: 'VISIBILITY_UPDATED',
  payload,
});

export const updateMiscellaneous = (payload) => ({
  type: 'MISCELLANEOUS_UPDATED',
  payload,
});

export const updateAims = (payload) => ({
  type: 'AIMS_UPDATED',
  payload,
});

export const resetSituation = () => ({
  type: 'SITUATION_RESET',
  payload: { ...defaultSituationState },
});
