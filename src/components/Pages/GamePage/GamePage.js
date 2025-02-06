import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../context/GameContext";
import PlayersHand from "../../CoreGameComponents/PlayersHand/PlayersHand";
import MainTable from "../../CoreGameComponents/MainTable/MainTable";

const GamePage = () => {
  const { gameState, setGameState, influencerCards, categoryCards } =
    useContext(GameContext);

  //   useEffect(() => {
  //     setGameState("game");
  //   }, [setGameState]);

  const playerCards = [
    { id: "card1", name: "Category 1" },
    { id: "card2", name: "Category 2" },
    // Add more cards as needed
  ];

  const initialInfluencer = { id: "influencer1", name: "Influencer Card" };

  return (
    <div>
      <PlayersHand cards={playerCards} />
      <MainTable initialInfluencer={initialInfluencer} />
    </div>
  );
};

export default GamePage;
