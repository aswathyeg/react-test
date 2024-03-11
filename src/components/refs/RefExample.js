import React, { useRef, useState } from "react";

const RefExample = () => {
  const [starTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const ref = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(ref.current);

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(ref.current);
  };
  let secondsPassed = 0;
  if (starTime !== 0 && now !== 0) {
    secondsPassed = (now - starTime) / 1000;
  }

  return (
    <div>
      <h1>Time passed:{secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default RefExample;
