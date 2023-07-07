import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Style/Button";
import Rules from "./Rules";

export default function Dice(props) {
  const [rule, setrule] = useState(false);
  const [dice, setdice] = useState(1);

  const ShowRule = () => {
    if (rule === false) {
      setrule(true);
    } else {
      setrule(false);
    }
  };

  const rollDice = () => {
    if (props.selectedNumber) {
      const randomnumber = Math.floor(Math.random() * 6) + 1;
      setdice(randomnumber);
      // console.log(props.selectedNumber, randomnumber);

      if (props.selectedNumber === randomnumber) {
        props.setscore((prev) => prev + 1);
      } else {
        props.setscore((prev) => prev - 2);
      }
    } else {
      props.setnotselect(true);
    }

    props.setSelectedNumber(null);
  };

  const resetscore = () => {
    props.setscore(0);
  };

  return (
    <MyDice>
      <img onClick={rollDice} src={`./dice/dice_${dice}.png`} alt="dice" />
      <p>Click on dice to roll</p>
      <Button name="Reset Score" color="white" click={resetscore}></Button>
      <Button name="Show Rules" color="black" click={ShowRule}></Button>
      {rule ? <Rules></Rules> : ""}
    </MyDice>
  );
}

const MyDice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  img {
    width: 200px;
  }
`;
