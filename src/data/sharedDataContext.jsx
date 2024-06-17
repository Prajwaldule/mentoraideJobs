import React, { createContext, useState } from 'react';

// Step 1: Create a context
const SharedDataContext = createContext();

// Step 2: Create a provider component for the context
export const SharedDataProvider = ({ children }) => {
  // Example of shared state
  const [mode, setMode] = useState(false);  
  
  return (
    <SharedDataContext.Provider value={{ mode, setMode }}>
      {children}
    </SharedDataContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useSharedData = () => React.useContext(SharedDataContext);
