import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [informationState, setInformationState] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isDeckShuffled, setIsDeckShuffled] = useState(false);

  useEffect(() => {
    console.log("global context rendered");
  }, []);

  //TODO: if authorized use local storage to get the player name and avatar
  //TODO: if not authorized use session storage to store the player name and avatar

  return (
    <GlobalContext.Provider
      value={{
        authorized,
        informationState,
        playerName,
        avatar,
        isDeckShuffled,
        setIsDeckShuffled,
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
