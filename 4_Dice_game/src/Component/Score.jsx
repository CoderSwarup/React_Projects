import React from "react";
import styled from "styled-components";

export default function Score(props) {
  return (
    <Myscore>
      <h1>{props.score}</h1>
      <p>Total Score</p>
    </Myscore>
  );
}

const Myscore = styled.div`
  h1 {
    text-align: center;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
`;
