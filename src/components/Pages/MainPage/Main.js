import { db } from "../../../services/fireBaseConfig";
const Main = () => {
  console.log("Main", db);
  return (
    <div className="main">
      <h1>Game</h1>
    </div>
  );
};

export default Main;
