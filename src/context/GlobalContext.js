import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [informationState, setInformationState] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        authorized,
        informationState,
        setInformationState,
        setAuthorized,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext as default, GlobalProvider };
