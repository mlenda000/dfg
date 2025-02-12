import React, { useState, useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import PartySocket from "partysocket/react";

const LandingPage = () => {
  const { setGameState } = useContext(GameContext);

  // responses from the server
  const [messages, setMessages] = useState([]);

  //input field for the client to send messages to the server
  const [input, setInput] = useState("");

  const ws = new PartySocket({
    //connects to the servers web address
    host: "http://127.0.0.1:1999",
    // the room that the client is connecting to
    room: "dfg-misinformation",
    // return from the server if its connected
    onOpen() {
      console.log("Connected to the WebSocket server");
    },

    //when the server sends a message to the client it concats it to the list of previous messages
    onMessage(event) {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    },

    //when the server disconnects from the client
    onClose() {
      console.log("Disconnected from the WebSocket server");
    },
  });

  const sendMessage = () => {
    // Check if the WebSocket connection is open
    if (ws.readyState === ws.OPEN) {
      //sends whatever message is in the input field to the server
      ws.send(input);
      //clears the input field
      setInput("");
      setGameState("game");
    }
  };

  // print each incoming message from the server to console
  ws.addEventListener("message", (e) => {
    console.log(e.data);
  });

  return (
    <div className="landing-page">
      <p>Description of the game and how its played</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={sendMessage}>Join a table</button>
    </div>
  );
};

export default LandingPage;
