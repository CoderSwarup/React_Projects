import React, { useContext, useEffect, useState } from "react";
import { ContextQuestion } from "../ContextQuestion";
import songwrong from "../Sounds/wrong.mp3";
import wait from "../Sounds/wait.mp3";

export default function Timer() {
  const [timer, settimer] = useState(30);
  const { questionNumber, setstop } = useContext(ContextQuestion);
  const A = new Audio(songwrong);
  const Wait = new Audio(wait);

  useEffect(() => {
    // Wait.play();
    if (timer <= 0) {
      A.play();
      return setstop(true);
    }
    const interval = setInterval(() => {
      settimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setstop, timer]);

  useEffect(() => {
    if (questionNumber > 10) {
      settimer(60);
    } else {
      settimer(30);
    }
  }, [questionNumber]);
  return timer;
}
