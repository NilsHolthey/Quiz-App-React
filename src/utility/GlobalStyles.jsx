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
  width: 100%;
  margin: 0;
  background: rgb(158,127,180);
  background: linear-gradient(42deg, rgba(158,127,180,1) 0%, rgba(162,251,217,1) 50%, rgba(182,255,180,1) 100%);
  color: #969696;
  font-family: "Montserrat", sans-serif;
  
  background-repeat: no-repeat;
  background-attachment: fixed;
}
`;
