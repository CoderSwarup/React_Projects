import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html{
    font-size: 62.5%;

}

h1{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 5rem;
    font-weight: 700;
}

h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
}

h3{
    font-size: 1.8rem;
    font-weight: 400;
}


p{
    color: ${({ theme }) => theme.colors.text};
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
    background: #e188ff;
}

::-webkit-scrollbar-thumb{
    background: #8b008b;
    border-radius:10px;
    border: 5px solid transparent;
}
`

export default GlobalStyle