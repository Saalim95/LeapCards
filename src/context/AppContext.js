import React from 'react';

export const Context = React.createContext();

export const AppContext = ({children, value}) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
