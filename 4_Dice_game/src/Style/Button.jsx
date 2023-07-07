import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return (
    <MyButton>
      <button onClick={props.click} className={props.color}>
        {props.name}
      </button>
    </MyButton>
  );
}

const MyButton = styled.div`
  button {
    padding: 5px 28px;
    font-size: 20px;
    font-weight: 800;
    border-radius: 10px;
  }
  .white {
    background-color: #ffffff;
    color: #000;
    border: 2px solid #000;
  }
  .black {
    background-color: #000000;
    color: #ffffff;
    border: 2px solid #ffffff;
  }
`;
