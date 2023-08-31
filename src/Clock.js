import React, { useState, useEffect } from "react";
export default function Clock() {
  //this part take care of the time
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-GB")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-GB"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  // the function inside the useEffect state will take care of timer
  // and clearInterval will stop the timer when the Clock component is taken off the website. This is important so that the timer doesn't keep running endlessly.
  // 1000 means every second
  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}
