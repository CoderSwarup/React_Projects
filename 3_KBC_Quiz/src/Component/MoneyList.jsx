import React, { useContext, useEffect, useMemo } from "react";
import { ContextQuestion } from "../ContextQuestion";

export default function MoneyList() {
  const { questionNumber, setEarned, setstop, setmessage } =
    useContext(ContextQuestion);
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNumber > moneyPyramid.length) {
      setmessage(
        "Congragulations You can Complete All Questions and You earned"
      );
      setEarned(moneyPyramid[0].amount);
      console.log(moneyPyramid);
      setstop(true);
      return;
    } else {
      questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }
  }, [moneyPyramid, questionNumber]);

  return (
    <ul className="Moneylist">
      {moneyPyramid.map((ele) => {
        return (
          <li
            key={ele.id}
            className={
              questionNumber == ele.id
                ? "moneyListItem active"
                : "moneyListItem"
            }
          >
            <span className="MoneyListItemNumber">{ele.id}</span>
            <span className="MoneyListItemAmount">{ele.amount}</span>
          </li>
        );
      })}
    </ul>
  );
}
