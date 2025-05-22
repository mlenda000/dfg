import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const CreditsPage = () => {
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/images/backgrounds/${themeBackgrounds[themeStyle]}`
          })`,
          position: "fixed", // Ensure stacking context
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
            backgroundColor: "rgba(190, 190, 190, 0.6)",
            zIndex: 0,
          }}
        />
        <button
          onClick={() => navigate(-1)}
          className="back-button"
          style={{ zIndex: 2 }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/back-button.png"}
            alt="Go back"
            style={{ cursor: "pointer" }}
          />
        </button>
        <div
          className="credits-page"
          style={{
            position: "relative", // Add position
            zIndex: 2, // Higher than overlay
          }}
        >
          <div className="credits-page__content">
            <h1 className="credits-page__title">Credits</h1>
            <p>
              <strong>Game developed by:</strong>
            </p>
            <ul className="credits-page__list">
              <li>
                <em>Aaron Teng</em> -{" "}
                <span className="credits-page__job">Team lead</span>
              </li>
              <li>
                <em>Avis Ann</em> -{" "}
                <span className="credits-page__job">Art direction</span>
              </li>
              <li>
                <em>Matt Bromage</em> -{" "}
                <span className="credits-page__job">UX design</span>
              </li>
              <li>
                <em>Mark Lendacky</em> -{" "}
                <span className="credits-page__job">System Developer</span>
              </li>
              <li>
                <em>Hira Iqbal</em> -{" "}
                <span className="credits-page__job">User testing</span>
              </li>
              <li>
                <em>Freddie Halbrow</em> -{" "}
                <span className="credits-page__job">Copy writer</span>
              </li>
            </ul>
            <p>
              <strong>Special thanks to:</strong>
            </p>
            <ul className="credits-page__list">
              <li>Project Real</li>
              <li>Design for Good</li>
              <li>Royal College of Art</li>
              <li>Our families and friends for their support</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreditsPage;
