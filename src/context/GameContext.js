import { createContext, useState, useEffect } from "react";
import {
  fetchCategoryCards,
  fetchInfluencerCards,
} from "../services/fireBaseFunctions";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "../services/env";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameRound, setGameRound] = useState(1);
  const [playerCount, setPlayerCount] = useState(0);
  const [gameState, setGameState] = useState("lobby");
  const [categoryCards, setCategoryCards] = useState();
  const [influencerCards, setInfluencerCards] = useState();
  const [players, setPlayers] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [rooms, setRooms] = useState(["New game", "dfg-misinformation"]);
  const [cardMessage, setCardMessage] = useState(undefined);
  const [playerId, setPlayerId] = useState("");

  // TODO: build a timer to go on gamepage
  // TODO: flip functionality for the cards
  // TODO: undo a single tactic card
  // TODO: update designs to match the new designs

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
      const [type, id, data] = message.split("+");
      //   console.log("message from server", type, id, data);

      switch (type) {
        case "id":
          setPlayerId(id);
          break;
        case "score":
          setPlayerScore(playerScore + Number(id));
          break;
        case "card":
          setCardMessage({ id: data, imageUrl: id });
          break;
        case "undo":
          console.log("undo message from server", type, id, data);
          const removeThisManyCards = Number(id);
          setCardMessage(removeThisManyCards);
          break;
        default:
          break;
      }

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

  const sendMessage = (input) => {
    // Check if the WebSocket connection is open
    if (ws.readyState === ws.OPEN) {
      //sends whatever message is in the input field to the server
      ws.send(JSON.stringify(input));
    }
  };

  const handleMessage = (message) => {
    // Implement your message handling logic here
    // console.log("New message:", message);
  };
  //   console.log(messages, "messages");

  return (
    <GameContext.Provider
      value={{
        gameRound,
        playerCount,
        gameState,
        categoryCards,
        influencerCards,
        players,
        playerScore,
        cardMessage,
        playerId,
        rooms,
        messages,
        setPlayers,
        setRooms,
        setCardMessage,
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

// TODO: future improvement: add a function to shuffle the category cards
// Utility function to shuffle the influencer deck
export function shuffleInfluencerDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
