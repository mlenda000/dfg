import React from "react";

const TacticsCard = ({ name, image, text, id }) => {
  //ratio 2.5 : 3.5
  return (
    <>
      {name === "The Truth" || id === 1 ? (
        <div className="tactics-card" id="playersHand">
          <div
            className="tactics-card__content"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/" + image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "white",
              border: "3px solid white",
              boxSizing: "border-box",
            }}
          >
            <h1
              className="tactics-card__title"
              style={{ color: id === 1 ? "red" : "black" }}
            >
              {name}
            </h1>
            <p
              className="tactics-card__description"
              style={{ color: id === 1 ? "red" : "black" }}
            >
              {text}
            </p>
          </div>
        </div>
      ) : (
        <div className="tactics-card" id="playersHand">
          <div className="tactics-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/" + image}
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
