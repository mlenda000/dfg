const InfluencerCard = ({
  name,
  description,
  example,
  image,
  category,
  villain,
  display,
  tacticUsed,
}) => {
  //ratio 2.5 : 3.5

  return (
    <div
      className={
        display === "modal" ? "influencer-card__modal" : "influencer-card"
      }
    >
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
        {tacticUsed?.length > 0 && (
          <div className="influencer-card__tactic-count">
            {tacticUsed.map((tactic) => (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/influencer/tactic-indicator.png"
                }
                alt="Tactic used count"
                height="20px"
                width="auto"
                key={tactic}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluencerCard;
