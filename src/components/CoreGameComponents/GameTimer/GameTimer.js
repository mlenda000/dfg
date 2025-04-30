import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const GameTimer = ({
  initialMinutes = 0,
  initialSeconds = 30,
  initialMilliseconds = 0,
  roundHasEnded,
  setRoundHasEnded,
}) => {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
    milliseconds: initialMilliseconds,
  });
  const { sendMessage, setShowGameTimer } = useContext(GameContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { minutes, seconds, milliseconds } = prevTime;

        if (milliseconds > 0) {
          milliseconds -= 1;
        } else if (seconds > 0) {
          milliseconds = 99;
          seconds -= 1;
        } else if (minutes > 0) {
          milliseconds = 99;
          seconds = 59;
          minutes -= 1;
        } else {
          clearInterval(interval);
        }

        return { minutes, seconds, milliseconds };
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (
      time.minutes === 0 &&
      time.seconds === 0 &&
      time.milliseconds === 0 &&
      !roundHasEnded
    ) {
      sendMessage({ type: "allReady", status: true });
      setRoundHasEnded(true);
      setShowGameTimer(false);
    }
  }, [roundHasEnded, sendMessage, setRoundHasEnded, setShowGameTimer, time]);

  return (
    <div className="timer">
      <img
        src={`${process.env.PUBLIC_URL}/images/clock.png`}
        alt="timer"
        height="45px"
        style={{ marginTop: "-12px" }}
      />
      <div className="timer__time">
        {`${String(time.minutes).padStart(2, "0")}:${String(
          time.seconds
        ).padStart(2, "0")}:${String(time.milliseconds).padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default GameTimer;
