import React, { useState } from "react";
import "./Style.css";
import MoneyList from "./MoneyList";
import QuetsionSec from "./QuetsionSec";
// import HelperSec from "./HelperSec";
import data from "./DataArray";
import { ContextQuestion } from "../ContextQuestion";
import HelperSec from "./HelperSec";
import Start from "./Start";

export default function Home() {
  const [username, setusername] = useState(null);
  const [stop, setstop] = useState(false);
  const [questionNumber, setquenstionnumber] = useState(1);
  const [Earned, setEarned] = useState("$ 0");
  const [message, setmessage] = useState("You Earned ");
  return (
    <>
      <ContextQuestion.Provider
        value={{
          setstop,
          questionNumber,
          setquenstionnumber,
          setEarned,
          setmessage,
        }}
      >
        <main className="Main">
          {username ? (
            <>
              <section className="SLeft">
                {stop ? (
                  <h1 className="endText">
                    {username} {message} <br /> {Earned}
                  </h1>
                ) : (
                  <>
                    <HelperSec></HelperSec>

                    <QuetsionSec data={data}></QuetsionSec>
                  </>
                )}
              </section>
              <section className="SRight">
                <MoneyList></MoneyList>
              </section>
            </>
          ) : (
            <Start setusername={setusername}></Start>
          )}
        </main>
      </ContextQuestion.Provider>
    </>
  );
}
