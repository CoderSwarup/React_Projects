import React from "react";
import styled from "styled-components";
import Button from "../Style/Button";

export default function Start(props) {
  const start = () => {
    props.setgamestart(false);
  };
  return (
    <Main>
      <div className="dice">
        <img src="./dices.png" alt="" />
      </div>
      <div className="start">
        <h1>DICE GAME</h1>
        <Button
          className="btn"
          name="Play Now"
          color="black"
          click={start}
        ></Button>
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .dice {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
    }
  }

  .start {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: 10rem;
      font-weight: 800;
    }
  }
`;
