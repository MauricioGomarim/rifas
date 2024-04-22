import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat',sans-serif;
    -webkit-font-smoothing: antialiased!important;
    text-rendering: optimizeLegibility!important;
    font-size: 16px;
    height: 100vh;
    background-color: #141414;
    }

    a {
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }


    body,input,button, textarea, select{
        font-family: 'Montserrat',sans-serif;
        font-size: 16px;
        outline: none;
    }

    input, select{
        border: none;
        outline: none;
    }

    .hidden {
        display: none !important;
    }


`;
