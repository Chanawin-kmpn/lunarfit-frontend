import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    h1, h2 {
        font-family: 'Orbitron', sans-serif;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #dddddd;
    }
`;

export default GlobalStyle;
