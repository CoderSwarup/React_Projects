import React, { useRef } from "react";
import StartSong from "../Sounds/Start.mp3";

export default function Start({ setusername }) {
  const inputref = useRef();
  const Sound = new Audio(StartSong);
  const click = () => {
    if (inputref.current.value !== "") {
      setusername(inputref.current.value);
      Sound.play();
      setTimeout(() => {
        Sound.pause();
      }, 3000);
    } else {
      alert("Enetr The Name");
    }
  };
  return (
    <div className="start">
      <input
        type="text"
        name="username"
        id="username"
        ref={inputref}
        placeholder="Enter Your Name "
      />

      <button onClick={() => click()}>Start</button>
    </div>
  );
}
