import { useState } from "react";
import "./App.css";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return <h2>{ctime}</h2>;
};
export default Clock;
