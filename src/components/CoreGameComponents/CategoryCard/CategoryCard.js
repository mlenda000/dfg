import React from "react";

const CategoryCard = ({ name, image, text }) => {
  //ratio 2.5 : 3.5
  return (
    <div className="category-card" id="playersHand">
      <div className="category-card__content">
        <img
          src={process.env.PUBLIC_URL + "/images/" + image}
          alt={name}
          className="category-card__image"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
