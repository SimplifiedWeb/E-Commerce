import React, { useState, useEffect } from "react";

const Time = ({ check }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-02-23T23:59:59");
    // Set your target date in the correct format
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      };
    }

    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (updatedTimeLeft) {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {!check ? (
        ""
      ) : (
        <div className="flex flex-col flex-1">
          <div className="top-titles mt-[-4px]">
            <ul className="flex text-[10px] sm:ml-1">
              <li className="px-4">Days</li>
              <li className="px-4">Hours</li>
              <li className="px-4">Minutes</li>
              <li className="px-1">Seconds</li>
            </ul>
          </div>
          <div className="counts ">
            <ul className="flex text-2xl sm:text-xl sm:ml-2  font-extrabold">
              <li className="px-3 ">{timeLeft?.days}</li>
              <li>
                <span className="text-[#cd2c2c]">:</span>
              </li>
              <li className="px-3">{timeLeft?.hours}</li>
              <li>
                <span className="text-[#cd2c2c]">:</span>
              </li>
              <li className="px-3 sm:px-4">{timeLeft?.minutes}</li>
              <li>
                <span className="text-[#cd2c2c]">:</span>
              </li>
              <li className="px-3">{timeLeft?.seconds}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Time;
