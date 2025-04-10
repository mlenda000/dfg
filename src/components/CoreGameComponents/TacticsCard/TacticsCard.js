import React from "react";
//TODO: add remove single tactic card functionality
const TacticsCard = ({ name, image, text, id }) => {
  //ratio 2.5 : 3.5
  return (
    <>
      {name === "The Truth" || id === 1 ? (
        <div className="tactics-card" id="playersHand">
          <div className="tactics-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/new-cards/true.png"}
              alt={name}
              className="tactics-card__image"
            />
          </div>
        </div>
      ) : (
        <div className="tactics-card" id="playersHand">
          <div className="tactics-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/new-cards/" + image}
              alt={name}
              className="tactics-card__image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TacticsCard;
