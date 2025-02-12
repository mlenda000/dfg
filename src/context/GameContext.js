import { createContext, useState, useEffect } from "react";
import {
  fetchCategoryCards,
  fetchInfluencerCards,
} from "../services/fireBaseFunctions";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameRound, setGameRound] = useState(3);
  const [playerCount, setPlayerCount] = useState(0);
  const [gameState, setGameState] = useState("lobby");
  const [categoryCards, setCategoryCards] = useState();
  const [influencerCards, setInfluencerCards] = useState();

  useEffect(() => {
    fetchCategoryCards("category_cards", setCategoryCards);
    fetchInfluencerCards("misinformation_cards", setInfluencerCards);
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameRound,
        playerCount,
        gameState,
        categoryCards,
        influencerCards,
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
