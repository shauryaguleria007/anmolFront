import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ({ children }) {
    
  const [file, setFile] = useState(null);
  const getFile = () => file;
  const resetFile = () => setFile(null);

  return (
    <AppContext.Provider value={{ setFile, getFile, resetFile }}>
      {children}
    </AppContext.Provider>
  );
}
