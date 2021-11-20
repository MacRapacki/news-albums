import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: "Gilroy";
  src: url("./utilis/fonts/Gilroy-Light.otf");
}

@font-face {
  font-family: "Gilroy";
  src: url("./utilis/fonts/Gilroy-ExtraBold.otf");
  font-weight: 700;
} */


*,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gilroy" ,
}


  body {
    width: 100%; 
    background-color: #F4F6F9;
  }

  button {
      cursor: pointer;
  }
`;
