import React from "react";
import ReactDOM from "react-dom/client";

import "./Style/index.css";
import { Wrapper } from "./Style/Wrapper";
import App from "./App.jsx";
import GlobalStyle from "./Style/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <App />
      <GlobalStyle />
    </Wrapper>
  </React.StrictMode>
);
