import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => setCounter(new Date()), 1000);
  }, []);

  return (
    <div></div>
  );
};

export default Counter;
