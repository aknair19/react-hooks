import { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [timer, setTimer] = useState(0);

  const tick = () => {
    setTimer(timer + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};

export default IntervalHookCounter;
