import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const UserPage = () => {
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
      <h1
        style={{
          backgroundColor: "yellow",
          color: "green",
          width: "fit-content",
          marginInline: "32px",
          //   padding: "16px",
          paddingInline: "16px",
          paddingBlock: "8px",
          border: "6px solid red",
        }}
      >
        User Page
      </h1>
    </div>
  );
};
export default UserPage;
