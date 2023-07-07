import React, { useState } from "react";
import Score from "./Score";
import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import Dice from "./Dice";

export default function Gameplay() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [notselect, setnotselect] = useState(false);
  const [score, setscore] = useState(0);

  return (
    <Mygameplay>
      <div className="mycontainer">
        <Score score={score}></Score>
        <NumberSelect
          notselect={notselect}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setnotselect={setnotselect}
        ></NumberSelect>
      </div>
      <Dice
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        setnotselect={setnotselect}
        setscore={setscore}
      ></Dice>
    </Mygameplay>
  );
}
const Mygameplay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding: 20px 30px;

  .mycontainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
