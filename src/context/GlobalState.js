// context/GlobalStateContext.js

import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    darkMode: false,
  });

  const toggleDarkMode = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, toggleDarkMode }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
