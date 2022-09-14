import { createContext, useContext, useState } from 'react';

const FormContext = createContext({});

export const FormStateContext = ({ children, initialState = {} }) => {
  const [state, setState] = useState(initialState);
  const updateState = (newState = {}) => {
    console.log(newState);
    setState({ ...state, ...newState });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        updateState,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormStateContext = () => useContext(FormContext);
