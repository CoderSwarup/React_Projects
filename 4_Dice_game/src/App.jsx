import { useState } from "react";
import "./App.css";
import Gameplay from "./Component/Gameplay";
import Start from "./Component/Start";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  const [gamestart, setgamestart] = useState(true);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      {gamestart ? (
        <Start setgamestart={setgamestart}> </Start>
      ) : (
        <Gameplay></Gameplay>
      )}
    </>
  );
}

export default App;
