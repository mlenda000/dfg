const CategoryCard = ({ name, description, example, image, category }) => {
  //ratio 2.5 : 3.5
  return (
    <div className="category-card">
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
