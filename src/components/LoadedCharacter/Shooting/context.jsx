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
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};

AlmStateProvider.propTypes = {
  state: PropTypes.shape({
    range: PropTypes.number,
    aims: PropTypes.number,
    stance: PropTypes.string,
    target: PropTypes.string,
    movement: PropTypes.objectOf(PropTypes.number),
    situation: PropTypes.objectOf(PropTypes.bool),
    visibility: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    ),
    miscellaneous: PropTypes.number,
  }),
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};

FirearmProvider.propTypes = {
  firearm: gunObjShape.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};
