import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const DispatchContext = createContext();

export const DispatchProvider = (
  { children, dispatch },
) => <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>;

DispatchProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.elementType, PropTypes.object],
  ).isRequired,
};
