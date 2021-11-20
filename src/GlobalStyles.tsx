import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy' , sans-serif
}


  body {
    width: 100%; 
    background-color: #F4F6F9;
  }

  button {
      cursor: pointer;
  }
`;
