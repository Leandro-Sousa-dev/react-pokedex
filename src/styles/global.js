import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 500;
    }
    ul, li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }

    button{
      border: 0px;
    }

`