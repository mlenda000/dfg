import React from "react";
import { useState } from "react";

const TacticsCard = ({ name, image, text, id, onUndo }) => {
  //ratio 2.5 : 3.5
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="tactics-card"
      id="playersHand"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tactics-card__content">
        <div
          className="tactics-card__image-container"
          style={{ position: "relative" }}
        >
          <img
            src={
              name === "The Truth" || id === 1
                ? process.env.PUBLIC_URL + "/images/new-cards/true.png"
                : process.env.PUBLIC_URL + "/images/new-cards/" + image
            }
            alt={name}
            className="tactics-card__image"
          />
          {isHovered && (
            <div
              className="tactics-card__overlay"
              onClick={() => onUndo(id)}
              style={{
                position: "absolute",
                bottom: "75px",
                left: "20px",
                zIndex: 1,
              }}
            >
              <div className="tactics-card__undo-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/undo-arrow-icon.svg`}
                  alt="Undo"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TacticsCard;
