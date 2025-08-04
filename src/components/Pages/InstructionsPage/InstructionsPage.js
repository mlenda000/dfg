import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { fetchCategoryCards } from "../../../services/fireBaseFunctions";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../CoreGameComponents/CategoryCard/CategoryCard";

const InstructionsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/player-selection");
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const [categoryCards, setCategoryCards] = useState([]);

  useEffect(() => {
    fetchCategoryCards("category_cards", setCategoryCards);
    // fetchInfluencerCards("misinformation_cards", setInfluencerCards);
  }, []);
  const allCards = categoryCards?.filter((card) => card.imageUrl);
  const cards = allCards.filter((card) => card.category !== "True");
  return (
    <>
      <div className="main-login">
        <img
          src={process.env.PUBLIC_URL + "/images/login-button.png"}
          alt="Logo"
          className="main-login__image"
          style={{ cursor: "pointer", position: "fixed" }}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
        }}
        className="main-page"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(190, 190, 190, 0.6)", // Adjust the color and transparency
            zIndex: 0,
          }}
        />
      </div>
      <div className="instructions-page" zIndex={2}>
        <button
          onClick={() => navigate(-1)}
          className="back-button"
          style={{ zIndex: 2 }}
          type="button"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/back-button.png"}
            alt="Go back"
            style={{ cursor: "pointer" }}
          />
        </button>

        <div className="instruction-page__content" style={{ zIndex: 2 }}>
          <div className="information-page__description" style={{ zIndex: 2 }}>
            <h2 className="instruction-page__image-header">How to Play</h2>
            <ol className="instructions-list">
              <li>
                <p
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  You'll see a news card and need to decide if it's real or
                  fake.
                </p>
                <img
                  style={{ padding: "30px" }}
                  src={process.env.PUBLIC_URL + "/images/news-card.png"}
                  alt="News Card"
                  className="instruction-page__image"
                />
              </li>
              <li>
                <p
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    textAlign: "center",
                    paddingBottom: 80,
                  }}
                >
                  If it's fake, you'll have to figure out which trick the
                  villains are using! <br /> ** Hover over the card for more
                  details. **
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%" * 0.66,
                    position: "relative",
                  }}
                >
                  {cards &&
                    cards.map((card) => {
                      return (
                        <CategoryCard
                          key={card.id}
                          name={card.name}
                          description={card.description}
                          image={card.imageUrl}
                          id={card.id}
                          location="instructions"
                        />
                      );
                    })}
                </div>
              </li>
              <li>
                <p
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  If you think the news card is telling the truth, use the
                  “Facts” card.
                </p>
                <img
                  style={{ padding: "50px" }}
                  src={process.env.PUBLIC_URL + "/images/new-cards/true.png"}
                  alt="Facts Card"
                  height={200}
                />
              </li>
              <li>
                <p
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  The little eye symbols at the bottom right of each news card
                  shows how many tricks are being used.
                </p>
                <img
                  style={{ padding: "50px" }}
                  src={process.env.PUBLIC_URL + "/images/eye-symbol.png"}
                  alt="Eye Symbol"
                  className="instruction-page__image"
                />
              </li>
              <li>
                <p
                  style={{
                    width: "80%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  If you make the wrong guesses, you will lose followers, but if
                  you guess correctly, you will gain more.
                </p>
                <p>The player with the most followers at the end wins!</p>
              </li>
            </ol>
          </div>
        </div>
        <button onClick={handleClick} className="next-button" type="button">
          <img
            src={process.env.PUBLIC_URL + "/images/lets-go-button.png"}
            alt="Logo"
            style={{
              cursor: "pointer",
              width: "60%",
              height: "auto",
              marginBottom: "30px",
              marginTop: "60px",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default InstructionsPage;
