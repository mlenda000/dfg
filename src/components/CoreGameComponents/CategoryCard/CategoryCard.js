import React from "react";

const CategoryCard = ({ name, image, text }) => {
  //ratio 2.5 : 3.5
  return (
    <>
      {name === "The Truth" ? (
        <div className="category-card" id="playersHand">
          <div
            className="category-card__content"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/" + image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "white",
              border: "3px solid white", // Add the border
              boxSizing: "border-box", // Ensure the border is included in the element's total size
            }}
          >
            <h1 className="category-card__title">{name}</h1>
            <p className="category-card__description">{text}</p>
          </div>
        </div>
      ) : (
        <div className="category-card" id="playersHand">
          <div className="category-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/" + image}
              alt={name}
              className="category-card__image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
