import React, { useState, useEffect } from "react";

const GameTimer = ({
  initialMinutes = 0,
  initialSeconds = 0,
  initialMilliseconds = 0,
}) => {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
    milliseconds: initialMilliseconds,
  });

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

  return (
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {`${String(time.minutes).padStart(2, "0")}:${String(
        time.seconds
      ).padStart(2, "0")}:${String(time.milliseconds).padStart(2, "0")}`}
    </div>
  );
};

export default GameTimer;
