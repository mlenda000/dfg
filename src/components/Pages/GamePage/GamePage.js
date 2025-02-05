import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../contexts/GameContext";

const GamePage = () => {
  const { game, setGame, influencerCards, categoryCards } =
    useContext(GameContext);
  const [gameState, setGameState] = useState(game);

  useEffect(() => {
    setGameState(game);
  }, [game]);


};
