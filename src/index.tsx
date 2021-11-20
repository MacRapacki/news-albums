import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
// import { theme } from "./utilis/theme/theme";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {" "}
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
