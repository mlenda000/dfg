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
      <h1>User Page</h1>
    </div>
  );
};
export default UserPage;
