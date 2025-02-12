import React from "react";

const TacticsCard = ({ name, image, text }) => {
  //ratio 2.5 : 3.5
  return (
    <div className="tactics-card" id="playersHand">
      <div className="tactics-card__content">
        {text && <h1>{text}</h1>}
        {!text && (
          <img
            src={process.env.PUBLIC_URL + "/images/" + image}
            alt={name}
            className="tactics-card__image"
          />
        )}
      </div>
    </div>
  );
};

export default TacticsCard;
