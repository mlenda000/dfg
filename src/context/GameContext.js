import { createContext, useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import {
  fetchCategoryCards,
  fetchInfluencerCards,
} from "../services/fireBaseFunctions";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "../services/env";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameRound, setGameRound] = useState(1);
  const [gameRoom, setGameRoom] = useState("");
  const [playersInRoom, setPlayersInRoom] = useState([]);
  const [gameState, setGameState] = useState("lobby");
  const [categoryCards, setCategoryCards] = useState();
  const [influencerCards, setInfluencerCards] = useState();
  const [players, setPlayers] = useState([]);
  const [rooms, setRooms] = useState(["Create room", "dfg-misinformation"]);
  const [cardMessage, setCardMessage] = useState(undefined);
  const [playerId, setPlayerId] = useState("");
  const [room, setRoom] = useState("lobby");
  const [currentInfluencer, setCurrentInfluencer] = useState(null);
  const [showGameTimer, setShowGameTimer] = useState(false);
  const [showScoringModal, setShowScoringModal] = useState(false);
  const [roundEnd, setRoundEnd] = useState(false);
  const [roundStart, setRoundStart] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(null);
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [webSocketReady, setWebSocketReady] = useState(false);
  const [waitingForPlayers, setWaitingForPlayers] = useState(true);
  const [roundTimer, setRoundTimer] = useState(30);
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [finalRound, setFinalRound] = useState(false);
  const [endGame, setEndGame] = useState(false);

  const { isDeckShuffled, setIsDeckShuffled } = useContext(GlobalContext);

  useEffect(() => {
    fetchCategoryCards("category_cards", setCategoryCards);
    // fetchInfluencerCards("misinformation_cards", setInfluencerCards);
  }, []);

  // responses from the server
  const [messages, setMessages] = useState([]);
  //   console.log("GameProvider initialized with room:", PARTYKIT_HOST);
  const ws = usePartySocket({
    //connects to the servers web address
    host: PARTYKIT_HOST,
    // the room that the client is connecting to
    room: room,
    // return from the server if its connected
    onOpen() {
      setWebSocketReady(true);
      console.log("Connected to the WebSocket server");
    },

    //when the server sends a message to the client it concats it to the list of previous messages
    onMessage(event) {
      const message = event.data;
      if (message && typeof message === "string") {
        const parsedMessage = JSON.parse(message);
        switch (parsedMessage?.type) {
          case "announcement":
            parsedMessage?.text &&
              console.log("Announcement from server:", parsedMessage?.text);
            break;
          case "playerId":
            setPlayerId(parsedMessage?.id);
            break;
          case "lobbyUpdate":
            setGameRoom({
              room: parsedMessage?.room,
              count: parsedMessage?.count,
              roomData: parsedMessage?.roomData?.players || [],
            });
            break;
          case "card":
            setCardMessage({
              id: parsedMessage?.data,
              imageUrl: parsedMessage?.id,
            });
            break;
          case "undo":
            const removeThisManyCards = Number(parsedMessage?.id);
            setCardMessage(removeThisManyCards);
            break;
          case "roomUpdate":
            setGameRoom((prevGameRoom) => ({
              ...prevGameRoom,
              count: parsedMessage?.count,
              roomData:
                parsedMessage?.players?.map((newPlayer) => {
                  const existingPlayer = prevGameRoom?.roomData?.find(
                    (player) => player.id === newPlayer.id
                  );
                  return existingPlayer ? existingPlayer : newPlayer;
                }) ||
                prevGameRoom?.roomData ||
                [],
              deck: parsedMessage?.deck?.data || [],
            }));
            setInfluencerCards(parsedMessage?.deck?.data || []);
            setIsDeckShuffled(true);
            break;
          case "roomUpdate-PlayerLeft":
            setGameRoom((prevGameRoom) => ({
              ...prevGameRoom,
              room: parsedMessage?.room,
              count: parsedMessage?.count,
              roomData: parsedMessage?.roomData || [],
            }));
            break;
          case "roundStart":
            setRoundTimer(30); // Reset round timer to 30 seconds
            setShowGameTimer(true);
            break;
          case "playerReady":
            setGameRoom((prevGameRoom) => ({
              ...prevGameRoom,
              roomData:
                prevGameRoom?.roomData?.map((player) => {
                  const updatedPlayer = parsedMessage?.roomData.find(
                    (data) => data.id === parsedMessage?.sender
                  );
                  return player.id === parsedMessage?.sender
                    ? updatedPlayer
                    : player;
                }) || [],
            }));
            break;
          case "allReady":
            setGameRoom((prevGameRoom) => ({
              ...prevGameRoom,
              roomData: prevGameRoom?.roomData?.map((player) => ({
                ...player,
                status: true,
              })),
            }));
            break;
          case "scoreUpdate":
            parsedMessage?.players.map((player) => {
              player.scoreUpdated = false;
              return player;
            });

            // Update the game room with the new scores
            setGameRoom((prevGameRoom) => ({
              ...prevGameRoom,
              roomData: parsedMessage?.players,
            }));
            setMessage("endOfRound");
            setResponseMsg({
              wasCorrect: parsedMessage?.players?.find(
                (player) => player.id === playerId
              )?.wasCorrect,
              hasStreak: parsedMessage?.players?.find(
                (player) => player.id === playerId
              )?.hasStreak,
              streak: parsedMessage?.players?.find(
                (player) => player.id === playerId
              )?.streak,
            });

            break;
          case "shuffledDeck":
            setInfluencerCards(parsedMessage?.data);
            setIsDeckShuffled(true);
            break;
          case "retrieveDeck":
            setInfluencerCards(parsedMessage?.deck?.data);
            setIsDeckShuffled(true);
            break;
          default:
            console.log("Unhandled message type from server:", parsedMessage);
            break;
        }
      } else {
        console.log("Received message from server:", message);
      }

      setMessages((prevMessages) => [...prevMessages, message]);
    },

    //when the server disconnects from the client
    onClose() {
      console.log("Disconnected from the WebSocket server");
    },
  });

  const sendMessage = (input) => {
    // Check if the WebSocket connection is open
    if (ws.readyState === ws.OPEN) {
      //sends whatever message is in the input field to the server
      ws.send(JSON.stringify(input));
    } else {
      console.error("WebSocket connection is not open. Cannot send message.");
    }
  };

  const handleMessage = (message) => {
    // Implement your message handling logic here
  };

  useEffect(() => {
    if (influencerCards?.length > 0 && !isDeckShuffled && gameRoom) {
      sendMessage({
        type: "startingDeck",
        data: influencerCards,
        gameRoom: gameRoom,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [influencerCards, gameRoom]);
  return (
    <GameContext.Provider
      value={{
        gameRound,
        gameRoom,
        gameState,
        categoryCards,
        influencerCards,
        players,
        cardMessage,
        playerId,
        rooms,
        messages,
        room,
        currentInfluencer,
        showGameTimer,
        showScoringModal,
        roundEnd,
        roundStart,
        showResponseModal,
        showScoreCard,
        webSocketReady,
        playersInRoom,
        waitingForPlayers,
        roundTimer,
        message,
        responseMsg,
        isDeckShuffled,
        finalRound,
        endGame,
        setEndGame,
        setFinalRound,
        setMessage,
        setRoundTimer,
        setWaitingForPlayers,
        setPlayersInRoom,
        setShowResponseModal,
        setShowScoreCard,
        setRoundEnd,
        setRoundStart,
        setShowGameTimer,
        setShowScoringModal,
        setCurrentInfluencer,
        setRoom,
        setPlayers,
        setRooms,
        setMessages,
        setCardMessage,
        sendMessage,
        handleMessage,
        setGameRound,
        setGameRoom,
        setGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
