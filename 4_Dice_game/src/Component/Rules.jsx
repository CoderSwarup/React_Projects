import React from "react";
import styled from "styled-components";

export default function Rules() {
  return (
    <Wrapper>
      <h2>How To play Dice Game</h2>
      <ol type="1">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ol>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    text-align: left !important;
  }

  ol {
    font-size: 19px;
    margin-top: 20px;
  }
`;
