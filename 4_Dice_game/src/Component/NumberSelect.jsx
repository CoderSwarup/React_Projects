import React, { useState } from "react";
import styled from "styled-components";

export default function NumberSelect(props) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const handleBoxClick = (num) => {
    props.setnotselect(false);
    props.setSelectedNumber(num);
    console.log(num);
  };

  return (
    <BoxContainer>
      <big className={props.notselect ? "" : "hide"}>
        You Have Not Selected Any Number
      </big>

      <div className="boxcontainer">
        {numbers.map((num) => (
          <div
            key={num}
            className={`box ${props.selectedNumber === num ? "select" : ""}`}
            onClick={() => handleBoxClick(num)}
          >
            <h2>{num}</h2>
          </div>
        ))}
      </div>
      <h3>Select Number</h3>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  big {
    font-size: 18px;
    color: red;
  }

  .hide {
    visibility: hidden;
  }

  .boxcontainer {
    margin: 8px 0;
    display: flex;
    gap: 20px;
  }
  .box {
    width: 50px;
    padding: 8px;
    border: 2px solid #000;
    cursor: pointer;
  }

  .select {
    background: #000;
    border: 2px solid white;
    color: #fff;
  }
  .select h2 {
    color: #fff;
  }

  h3 {
    font-size: 3rem;
    font-weight: 900;
    margin-top: 10px;
  }
`;
