import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
 
}

html{font-size: 62.5%;
    margin: 0;
    padding:0;

}
body {
  margin: 0;
  background-color: #53744bc4;
  color: #969696;
  font-family: "Montserrat", sans-serif;
  background-image: url("./src/components/Images/question-mark-background-1909040_1280 1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
`;
