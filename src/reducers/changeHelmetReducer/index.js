import { returnUpdatedHelmet } from '../reducerHelpers';

export const changeHelmetReducer = (state, action) => returnUpdatedHelmet(state, action.payload);
