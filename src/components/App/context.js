/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { createContext } from 'react';

export const DispatchContext = createContext();

export const DispatchProvider = (
  { children, dispatch },
) => <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>;
