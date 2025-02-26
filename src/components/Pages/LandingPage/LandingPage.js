import React, { useState, useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const LandingPage = () => {
  const { setGameState, sendMessage } = useContext(GameContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    sendMessage(input, "player");
    setInput("");
    setGameState("game");
  };

  return (
    <div className="landing-page">
      <p>Description of the game and how its played</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Join a table</button>
      </form>
    </div>
  );
};

export default LandingPage;
