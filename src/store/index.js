import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children, initialValue }) => {
  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), initialValue,);

  return <AppContext.Provider value={[state, setState]}>
    {children}
  </AppContext.Provider>
}