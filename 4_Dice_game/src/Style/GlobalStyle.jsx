import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
}

html{
    font-size: 62.5%;
    background-color:#fff;
}
body{
    overflow-x:hidden;
    width: 100vw;
}

h1{
    color: #000;
    font-size: 5rem;
    font-weight: 700;
}

h2{
    color: #000;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
}

h3{
    font-size: 1.8rem;
    font-weight: 400;
}


p{
    color: #000;
    opacity: .8;
    font-size: 1.65rem;
    margin-top: 1rem;
    font-weight: 400;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

::-webkit-scrollbar{
    width: 10px;
}


::-webkit-scrollbar-track{
    background: #ffd437;
}

::-webkit-scrollbar-thumb{
    background: #ff5b2e;
    border-radius:10px;
    border: 5px solid transparent;
}

.container{   
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    overflow-x: hidden;
}

.flex{
    display: flex;
    justify-content: center;
    align-items: center;

}
.flex-c{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


`;

export default GlobalStyle;
