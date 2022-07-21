const updateRangeReducer = (state, payload) => ({ ...state, range: payload });
const updateStanceReducer = (state, payload) => ({ ...state, stance: payload });
const updateTargetReducer = (state, payload) => ({ ...state, target: payload });
const updateMovementReducer = (state, payload) => ({ ...state, movement: payload });
const updateSituationReducer = (state, payload) => ({ ...state, situation: { ...payload } });
const updateVisibilityReducer = (state, payload) => ({ ...state, visibility: { ...payload } });
const updateMiscellaneousReducer = (state, payload) => ({ ...state, miscellaneous: payload });
const updateAimsReducer = (state, payload) => ({ ...state, aims: payload });
const resetSituationReducer = (state, payload) => ({ ...state, situation: payload });

export default (state, action) => {
  switch (action.type) {
    case 'RANGE_UPDATED':
      return updateRangeReducer(state, action.payload);
    case 'STANCE_UPDATED':
      return updateStanceReducer(state, action.payload);
    case 'TARGET_UPDATED':
      return updateTargetReducer(state, action.payload);
    case 'MOVEMENT_UPDATED':
      return updateMovementReducer(state, action.payload);
    case 'SITUATION_UPDATED':
      return updateSituationReducer(state, action.payload);
    case 'VISIBILITY_UPDATED':
      return updateVisibilityReducer(state, action.payload);
    case 'MISCELLANEOUS_UPDATED':
      return updateMiscellaneousReducer(state, action.payload);
    case 'AIMS_UPDATED':
      return updateAimsReducer(state, action.payload);
    case 'SITUATION_RESET':
      return resetSituationReducer(state, action.payload);
    default:
      return state;
  }
};
