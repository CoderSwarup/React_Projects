import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    body{
        background: ${({ theme }) => theme.colors.dark};
        -webkit-font-smoothing:antialiased;
    }


    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.colors.footer};
    }

    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.colors.info};
        border-radius: 20px;
    }

    h1{
        font-size: 4rem;
    }

    .container{
        padding: 0;
        max-width: 1140px;
        margin: auto;
    }

    .container2{
        background:${({ theme }) => theme.colors.primary};
    }

    .section-heading{
        position: relative;
        font-size: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.pure};
        margin-bottom: 3rem;
        text-shadow: 0 0 1px rgba(40,54,95,0.1);


        &::after{
            content: "";
            height: 3px;
            width: 85px;
            position: absolute;
            bottom:-10px;
            left: 0;
            border-radius: 2px;
            border: 1.5px dotted ${({ theme }) => theme.colors.danger};
        }
    }

    .common-padding{
        padding: 3rem;
    }

    @media screen and (max-width:1145px) {
        .container{
            max-width: 90%;
    }

        
    }

    @media screen and (max-width:460px) {
        
    .common-padding{
        padding: 1.8rem;
    }
}

`