import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";
// import { GlobalContext } from "../../../context/GlobalContext";
import MainTable from "../../CoreGameComponents/MainTable/MainTable";
import PlayersHand from "../../CoreGameComponents/PlayersHand/PlayersHand";
import { Droppable } from "../../GenericComponents/Droppable/Droppable";
import { DndContext } from "@dnd-kit/core";
import { all } from "axios";

const ActiveGamePage = ({ setRoundEnd, roundHasEnded, setRoundHasEnded }) => {
  const {
    categoryCards,
    sendMessage,
    gameRound,
    currentInfluencer,
    setCurrentInfluencer,
    gameRoom,
    setGameRoom,
    playerId,
    messages,
  } = useContext(GameContext);
  //   const { playerName } = useContext(GlobalContext);
  const playersHand = categoryCards?.filter((card) => card.imageUrl);

  const [mainTableItems, setMainTableItems] = useState([]);
  const [finishRound, setFinishRound] = useState(false);
  const [submitForScoring, setSubmitForScoring] = useState(false);

  const [playersHandItems, setPlayersHandItems] = useState(playersHand);

  const handleDrop = (event) => {
    const { active, over } = event;
    if (over?.id == null) {
      return;
    }

    if (active.id !== over.id) {
      const activeCard = playersHandItems.find((item) => item.id === active.id);
      setPlayersHandItems((items) =>
        items.filter((item) => item.id !== active.id)
      );
      const removeStartingText = mainTableItems.filter((card) => card.id !== 1);

      setMainTableItems([...removeStartingText, activeCard]);

      setGameRoom((prevRoom) => {
        const updatedPlayers = prevRoom.roomData.map((player) => {
          if (player.id === playerId) {
            return {
              ...player,
              tacticUsed: player?.tacticUsed
                ? [...player.tacticUsed, activeCard.category]
                : [activeCard.category],
            };
          }
          return player;
        });

        return {
          ...prevRoom,
          roomData: updatedPlayers,
        };
      });
    }
  };

  useEffect(() => {
    const handleFinishRound = () => {
      sendMessage({
        type: "endOfRound",
        players: gameRoom.roomData,
        round: gameRound,
      });
      setRoundEnd(true);
    };

    const allPlayersReady =
      Array.isArray(gameRoom?.roomData) &&
      gameRoom.roomData.length > 0 &&
      gameRoom.roomData.every(
        (player) => player?.status === true && player?.tacticUsed?.length > 0
      );

    if (allPlayersReady && !submitForScoring) {
      console.log("All players are ready and conditional let me in");
      setRoundHasEnded(true);
      handleFinishRound();
      setSubmitForScoring(true);
      setRoundHasEnded(false);
    }
  }, [
    gameRoom.roomData,
    gameRound,
    roundHasEnded,
    sendMessage,
    setRoundHasEnded,
    submitForScoring,
    messages,
    setRoundEnd,
  ]);

  useEffect(() => {
    if (mainTableItems.length > 0) {
      setFinishRound(true);
    } else {
      setFinishRound(false);
    }
  }, [mainTableItems]);

  return (
    <DndContext
      onDragEnd={(e) => {
        handleDrop(e);
      }}
    >
      <div style={{ zIndex: 2 }}>
        <Droppable>
          <MainTable
            items={mainTableItems}
            round={gameRound}
            currentInfluencer={currentInfluencer}
            setCurrentInfluencer={setCurrentInfluencer}
            finishRound={finishRound}
            setRoundEnd={setRoundEnd}
            setPlayersHandItems={setPlayersHandItems}
            mainTableItems={mainTableItems}
            setMainTableItems={setMainTableItems}
            originalItems={playersHand}
            setSubmitForScoring={setSubmitForScoring}
          />
        </Droppable>
        <PlayersHand items={playersHandItems} />
      </div>
    </DndContext>
  );
};

export default ActiveGamePage;
