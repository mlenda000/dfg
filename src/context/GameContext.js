import { createContext, useState, useEffect } from "react";
import {
  fetchCategoryCards,
  fetchInfluencerCards,
} from "../services/fireBaseFunctions";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "../services/env";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameRound, setGameRound] = useState(3);
  const [playerCount, setPlayerCount] = useState(0);
  const [gameState, setGameState] = useState("lobby");
  const [categoryCards, setCategoryCards] = useState();
  const [influencerCards, setInfluencerCards] = useState();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchCategoryCards("category_cards", setCategoryCards);
    fetchInfluencerCards("misinformation_cards", setInfluencerCards);
  }, []);

  // responses from the server
  const [messages, setMessages] = useState([]);

  const ws = usePartySocket({
    //connects to the servers web address
    host: PARTYKIT_HOST,
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

  //   ws.addEventListener("message", (e) => {
  //     console.log(e.data);
  //   });

  const sendMessage = (input, type) => {
    // Check if the WebSocket connection is open
    if (ws.readyState === ws.OPEN) {
      //sends whatever message is in the input field to the server
      ws.send(`type=${type}-${JSON.stringify(input)}`);
    }
  };

  const handleMessage = (message) => {
    // Implement your message handling logic here
    // console.log("New message:", message);
  };

  return (
    <GameContext.Provider
      value={{
        gameRound,
        playerCount,
        gameState,
        categoryCards,
        influencerCards,
        players,
        sendMessage,
        handleMessage,
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
