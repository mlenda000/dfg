import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [informationState, setInformationState] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        authorized,
        informationState,
        playerName,
        avatar,
        setAvatar,
        setPlayerName,
        setInformationState,
        setAuthorized,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
