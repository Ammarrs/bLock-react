import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  let hrs = time.getHours();
  let  mins = time.getMinutes();
  let secs = time.getSeconds();

  const period = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12 || 12;

  const formattedHrs = String(hrs).padStart(2, "0");
  const formattedMins = String(mins).padStart(2, "0");
  const formattedSecs = String(secs).padStart(2, "0");

  return (
    <div className="mb-5">
      <span className="text-7xl md:text-8xl lg:text-9xl font-bold">{formattedHrs}:{formattedMins}:{formattedSecs} {period}</span>
    </div>
  );
}

export default Clock;
