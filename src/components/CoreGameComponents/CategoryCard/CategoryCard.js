import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const CategoryCard = () => {
  const { categoryCards } = useContext(GameContext);

  //ratio 2.5 : 3.5
  return (
    <div>
      <h1>CategoryCard</h1>
      <div className="category-card">
        {categoryCards?.length > 0 &&
          categoryCards.map((card) => (
            <div key={card.id} className="category-card__content">
              {card?.image && (
                <img
                  src={card.image}
                  alt={card.category}
                  className="category-card__images"
                />
              )}
              <h1 className="category-card__title">{card.name}</h1>
              <div className="category-card__subheading">Description</div>
              <p className="category-card__description">{card.description}</p>
              <div className="category-card__subheading">Example</div>
              <p className="category-card__description">{card.example}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryCard;
