import React from "react";

const CategoryCard = ({ name, image, text }) => {
  //ratio 2.5 : 3.5

  return (
    <>
      {name === "The Truth" ? (
        <div className="category-card" id="playersHand">
          <div className="category-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/new-cards/true.png"}
              alt={name}
              className="category-card__image"
            />
          </div>
        </div>
      ) : (
        <div className="category-card" id="playersHand">
          <div className="category-card__content">
            <img
              src={process.env.PUBLIC_URL + "/images/new-cards/" + image}
              alt={name}
              className="category-card__image"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "/images/new-cards-backs/" + image)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "/images/new-cards/" + image)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
