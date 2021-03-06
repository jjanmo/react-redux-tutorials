import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing : border-box;
    margin : 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size : 30px;
    color : dodgerblue;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  .App {
    display : flex;
    justify-content : center;
    align-items: center;
    width : 100%;
    height : 70vh;
  }
  input {
    outline : none;
  }
`;

export default GlobalStyles;
