import { returnUpdatedUniform } from '../reducerHelpers';

export const changeUniformReducer = (state, action) => returnUpdatedUniform(state, action.payload);
