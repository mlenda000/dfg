import React, { useState, useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const LobbyPage = () => {
  const { setGameState, sendMessage } = useContext(GameContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    sendMessage({ name: input, type: "player", avatar: "avatar1" });
    setInput("");
    setGameState("game");
  };

  return <div className="lobby-page"></div>;
};

export default LobbyPage;
