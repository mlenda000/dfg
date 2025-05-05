import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const GameEndPage = ({ score, onRestart }) => {
  const { themeStyle, themeBackgrounds } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          `/images/backgrounds/${themeBackgrounds[themeStyle]}`
        })`,
      }}
      className="main-page"
    >
      <h1>Game Over!</h1>
      <p>Your score: {score}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};
export default GameEndPage;
