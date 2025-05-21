const WaitingModal = () => {
  return (
    <div className="round-modal__overlay">
      <div className="waiting-modal__content ">
        <h1 className="loading">
          Waiting for more players
          <span className="loading__ellipsis">
            <span className="ellipsis--1">.</span>
            <span className="ellipsis--2">.</span>
            <span className="ellipsis--3">.</span>
          </span>
        </h1>
      </div>
    </div>
  );
};
export default WaitingModal;
