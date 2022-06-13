import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset} 
  * { 
      box-sizing: border-box;
  }
  body {
      font-family: "Noto Sans KR", sans-serif;
  }
  a {
  text-decoration: none;
  color: black;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }

  &:hover,
  &:active {
    text-decoration: none;
  }
}
`;

export default GlobalStyles;
