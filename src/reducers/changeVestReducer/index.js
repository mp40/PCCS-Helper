import { returnUpdatedVest } from '../reducerHelpers';

export const changeVestReducer = (state, action) => returnUpdatedVest(state, action.payload);
