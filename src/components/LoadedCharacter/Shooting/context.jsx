import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../../helpers/proptypeShapes';

export const AlmDispatchContext = createContext();
export const AlmStateContext = createContext();
export const FirearmContext = createContext();

export const AlmDispatchProvider = (
  { children, dispatch },
) => <AlmDispatchContext.Provider value={dispatch}>{children}</AlmDispatchContext.Provider>;

export const AlmStateProvider = (
  { children, state },
) => <AlmStateContext.Provider value={state}>{children}</AlmStateContext.Provider>;

export const FirearmProvider = (
  { children, firearm },
) => <FirearmContext.Provider value={firearm}>{children}</FirearmContext.Provider>;

AlmDispatchProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
};

AlmStateProvider.propTypes = {
  state: PropTypes.objectOf().isRequired,
  children: PropTypes.elementType.isRequired,
};

FirearmProvider.propTypes = {
  firearm: gunObjShape.isRequired,
  children: PropTypes.elementType.isRequired,
};
