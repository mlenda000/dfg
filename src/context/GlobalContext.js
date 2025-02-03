import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        authorized,
        setAuthorized,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext as default, GlobalProvider };
