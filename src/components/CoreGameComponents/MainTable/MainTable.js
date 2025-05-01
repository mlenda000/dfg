import React, { useEffect, useContext } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import TacticsCard from "../TacticsCard/TacticsCard";
import { GameContext } from "../../../context/GameContext";
import { ThemeContext } from "../../../context/ThemeContext";

const MainTable = ({
  items,
  round,
  currentInfluencer,
  setCurrentInfluencer,
  finishRound,
  setRoundEnd,
  setPlayersHandItems,
  originalItems,
  mainTableItems,
  setMainTableItems,
  setSubmitForScoring,
  //   setGameEnd,
}) => {
  const {
    influencerCards,
    sendMessage,
    gameRoom,
    message,
    setMessage,
    isDeckShuffled,
  } = useContext(GameContext);
  const { setThemeStyle } = useContext(ThemeContext);

  const gameCards = [...influencerCards];

  useEffect(() => {
    const resetTable = () => {
      setMessage("");
      setPlayersHandItems(originalItems);
      const filteredItems = mainTableItems.filter(
        (item) => item.collection !== "category_cards"
      );

      setMainTableItems(filteredItems);
      setSubmitForScoring(false);
    };
    if (message === "endOfRound") {
      resetTable();
    }
  }, [
    mainTableItems,
    originalItems,
    setMainTableItems,
    setPlayersHandItems,
    setRoundEnd,
    message,
    setMessage,
    setSubmitForScoring,
  ]);

  useEffect(() => {
    if (
      influencerCards.length > 0 &&
      gameCards.length > round &&
      isDeckShuffled
    ) {
      setCurrentInfluencer(gameCards[0]);
    } else {
      console.log(
        "No influencer cards available or deck not shuffled yet. influencerCards:"
      );
      //   setGameEnd(true);
    }
  }, [
    gameCards,
    influencerCards.length,
    isDeckShuffled,
    round,
    setCurrentInfluencer,
  ]);

  useEffect(() => {
    setThemeStyle(currentInfluencer?.villain);
    const messageRdyInfluencer = {
      type: "influencer",
      villain: currentInfluencer?.villain,
      tactic: Array.isArray(currentInfluencer?.tacticUsed)
        ? currentInfluencer?.tacticUsed
        : [currentInfluencer?.tacticUsed],
    };
    sendMessage(messageRdyInfluencer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInfluencer]);

  const handlePlayerReady = () => {
    // console.log("Player is ready" + gameRoom?.roomData);
    sendMessage({ type: "playerReady", players: gameRoom?.roomData });
  };

  const handleReturnCard = (cardId) => {
    const cardToReturn = mainTableItems.find((item) => item.id === cardId);
    if (cardToReturn) {
      setMainTableItems((items) => items.filter((item) => item.id !== cardId));
      setPlayersHandItems((items) => [...items, cardToReturn]);
      sendMessage({ type: "return card", cardId });
    }
  };

  return (
    <div className="main-table">
      <div className="main-table__influencer">
        <InfluencerCard
          name={currentInfluencer?.caption}
          description={currentInfluencer?.bodyCopy}
          example="Influencer Example"
          category={currentInfluencer?.tacticUsed}
          villain={currentInfluencer?.villain}
          image={
            currentInfluencer?.newsImage
              ? process.env.PUBLIC_URL +
                `/images/influencer/${currentInfluencer.newsImage}`
              : process.env.PUBLIC_URL + `/images/influencer/scientist.png`
          }
          tacticUsed={currentInfluencer?.tacticUsed}
        />
      </div>
      <div className="main-table__tactics">
        {items.map((card) => (
          <TacticsCard
            name={card?.name}
            image={card?.imageUrl}
            text={card?.description}
            id={card?.id}
            key={card?.id}
            onUndo={handleReturnCard}
          />
        ))}
      </div>
      {finishRound && (
        <div onClick={handlePlayerReady} className="main-table__finish-round">
          <img
            src={`${process.env.PUBLIC_URL}/images/next-button.png`}
            alt="Ready"
            width={"100%"}
            height={"100%"}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
      <div
        className="main-table__background"
        style={finishRound ? { display: "none" } : { display: "block" }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/place-cards.png"}
          alt="Place cards"
        />
      </div>
    </div>
  );
};

export default MainTable;
