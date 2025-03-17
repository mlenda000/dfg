const GameEndPage = ({ score, onRestart }) => {
  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your score: {score}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};
export default GameEndPage;
