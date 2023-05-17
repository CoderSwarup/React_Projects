import React, { useContext, useEffect, useState } from "react";
import { ContextQuestion } from "../ContextQuestion";
import songOption from "../Sounds/kbc_option_lock_tune.mp3";
import songcorrect from "../Sounds/correct.mp3";
import songwrong from "../Sounds/wrong.mp3";

export default function QuetsionSec(props) {
  const { questionNumber, setquenstionnumber, setstop } =
    useContext(ContextQuestion);
  const [cques, setCques] = useState([]);
  const [selectedAns, setSelectedAns] = useState(null);
  const [classname, setclassname] = useState("answer");
  const audioOption = new Audio(songOption);
  const audiocorrect = new Audio(songcorrect);
  const audiowrong = new Audio(songwrong);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setCques(props.data[questionNumber - 1]);
  }, [props.data, cques, questionNumber]);

  const handalClick = (answer) => {
    audioOption.play();
    setSelectedAns(answer);
    setclassname("answer active");

    delay(1500, () => {
      setclassname(answer.correct ? "answer correct" : "answer wrong");
    });
    delay(3000, () => {
      if (answer.correct) {
        audiocorrect.play();
      } else {
        audiowrong.play();
      }
    });

    delay(7500, () => {
      if (answer.correct) {
        setquenstionnumber((prev) => prev + 1);
        audiocorrect.pause();
      } else {
        setstop(true);
      }
    });
  };
  return (
    <div className="QuestionsSection">
      <div className="question">{cques ? cques.question : ""}</div>

      <div className="answers">
        {cques && cques.answers
          ? cques.answers.map((ans) => (
              <div
                className={selectedAns === ans ? classname : "answer"}
                onClick={() => handalClick(ans)}
              >
                {ans.text}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
