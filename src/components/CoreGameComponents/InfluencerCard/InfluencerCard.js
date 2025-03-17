const InfluencerCard = ({
  name,
  description,
  example,
  image,
  category,
  villain,
}) => {
  //ratio 2.5 : 3.5

  return (
    <div className="influencer-card">
      <div className="influencer-card__content">
        {image && (
          <img src={image} alt={category} className="influencer-card__images" />
        )}
        <div className="influencer-card__text">
          <h1 className="influencer-card__title">{name}</h1>

          {description && (
            <p className="influencer-card__description">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
