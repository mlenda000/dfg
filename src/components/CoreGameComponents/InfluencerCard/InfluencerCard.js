const InfluencerCard = ({
  name,
  description,
  example,
  image,
  category,
  villain,
}) => {
  //ratio 2.5 : 3.5

  console.log(example);
  return (
    <div className="influencer-card">
      <div className="influencer-card__content">
        <div>
          {image && (
            <img
              src={image}
              alt={category}
              className="influencer-card__images"
            />
          )}
          <h1 className="influencer-card__title">{name}</h1>
        </div>
        {description && (
          <>
            <div className="influencer-card__subheading">Description</div>
            <p className="influencer-card__description">{description}</p>
          </>
        )}
        {example && (
          <>
            <div className="influencer-card__subheading">Example</div>
            <p className="influencer-card__description">{example}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default InfluencerCard;
