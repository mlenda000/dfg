import { createContext, useState, useEffect } from "react";
import {
  fetchCategoryCards,
  fetchMisinformationCards,
} from "../services/fireBaseFunctions";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameRound, setGameRound] = useState(3);
  const [playerCount, setPlayerCount] = useState(0);
  const [gameState, setGameState] = useState("lobby");
  const [categoryCards, setCategoryCards] = useState();
  const [misinformationCards, setMisinformationCards] = useState();

  useEffect(() => {
    fetchCategoryCards("category_cards", setCategoryCards);
    fetchMisinformationCards("misinformation_cards", setMisinformationCards);
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameRound,
        playerCount,
        gameState,
        categoryCards,
        misinformationCards,
        setGameRound,
        setPlayerCount,
        setGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
