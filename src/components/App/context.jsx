import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const DispatchContext = createContext();
export const StateContext = createContext();

export const DispatchProvider = (
  { children, dispatch },
) => <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>;

export const StateProvider = (
  { children, state },
) => <StateContext.Provider value={state}>{children}</StateContext.Provider>;

DispatchProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};

StateProvider.propTypes = {

  state: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]),
  ).isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};
