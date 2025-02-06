
const CategoryCard = ({ name, description, example, image, category }) => {

  //ratio 2.5 : 3.5
  return (
    <div className="category-card">
      <div className="category-card__content">
        {image && (
          <img src={image} alt={category} className="category-card__images" />
        )}
        <h1 className="category-card__title">{name}</h1>
        <div className="category-card__subheading">Description</div>
        <p className="category-card__description">{description}</p>
        <div className="category-card__subheading">Example</div>
        <p className="category-card__description">{example}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
