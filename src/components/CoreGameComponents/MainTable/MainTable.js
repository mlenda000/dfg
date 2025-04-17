import React, { useEffect } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import TacticsCard from "../TacticsCard/TacticsCard";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

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
}) => {
  const { influencerCards, sendMessage } = useContext(GameContext);

  const gameCards = [...influencerCards];

  const handleFinishRound = () => {
    sendMessage({ type: "finish round", round });
    setRoundEnd(true);
    handleUndo();
  };

  //   const handleDrop = (event) => {
  //     const { active, over } = event;
  //     if (over?.id == null) {
  //       return;
  //     }

  //     if (active.id !== over.id) {
  //       const activeCard = playersHandItems.find((item) => item.id === active.id);
  //       setPlayersHandItems((items) =>
  //         items.filter((item) => item.id !== active.id)
  //       );
  //       const removeStartingText = mainTableItems.filter((card) => card.id !== 1);

  //       setMainTableItems([...removeStartingText, activeCard]);
  //       sendCardToServer(activeCard.category);
  //     }
  //   };

  const handleReturnCard = (cardId) => {
    const cardToReturn = mainTableItems.find((item) => item.id === cardId);
    if (cardToReturn) {
      setMainTableItems((items) => items.filter((item) => item.id !== cardId));
      setPlayersHandItems((items) => [...items, cardToReturn]);
      sendMessage({ type: "return card", cardId });
    }
  };

  const handleUndo = () => {
    // Send a message to the server to undo the last action

    setPlayersHandItems(originalItems);
    const filteredItems = mainTableItems.filter(
      (item) => item.collection !== "category_cards"
    );

    const count = mainTableItems.filter(
      (item) => item.collection === "category_cards"
    ).length;

    // sendMessage({ action: "remove_cards", count: originalItems.length }, "update_clients");
    setMainTableItems(filteredItems);
    sendMessage({ count, type: "undo" });
  };

  useEffect(() => {
    if (influencerCards.length > 0 && gameCards.length > round) {
      setCurrentInfluencer(gameCards[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const messageRdyInfluencer = {
      type: "influencer",
      villain: currentInfluencer?.villain,
      tactic: currentInfluencer?.tacticUsed,
    };
    sendMessage(messageRdyInfluencer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInfluencer]);

  return (
    <div className="main-table">
      <div className="main-table__influencer">
        <InfluencerCard
          name={currentInfluencer?.caption}
          description={currentInfluencer?.bodyCopy}
          example="Influencer Example"
          category={currentInfluencer?.tacticUsed}
          villain={currentInfluencer?.villain}
          image={process.env.PUBLIC_URL + `/images/influencer/scientist.png`}
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
        <div onClick={handleFinishRound} className="main-table__finish-round">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 122.877 101.052"
            enable-background="new 0 0 122.877 101.052"
          >
            <g>
              <path
                d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"
                fill="currentcolor"
              />
            </g>
          </svg>
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
