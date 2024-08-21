import { useEffect, useState } from "react";
import { toZonedTime } from "date-fns-tz";
import { Colors } from "@/lib/colors";

const Counter = () => {
  const timeZone = "America/Merida";
  const targetDate = new Date("2024-11-22T20:00:00");

  const calculateTimeLeft = () => {
    const now = toZonedTime(new Date(), timeZone);
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className={`text-black text-lg w-fit text-center flex justify-center gap-3 py-3 px-5 rounded-xl`}
      style={{ background: Colors.tertiary.hover }}
    >
      <div>
        <p>{timeLeft.days}</p>
        <p>D</p>
      </div>
      <p>:</p>
      <div>
        <p>{timeLeft.hours}</p>
        <p>H</p>
      </div>
      <p>:</p>
      <div>
        <p>{timeLeft.minutes}</p>
        <p>M</p>
      </div>
      <p>:</p>
      <div>
        <p>{timeLeft.seconds}</p>
        <p>S</p>
      </div>
    </div>
  );
};

export default Counter;
