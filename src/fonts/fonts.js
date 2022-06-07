import { createGlobalStyle } from 'styled-components';
import ItalianStyleLtIt from './ItalianStyleLtIt.woff';

export default createGlobalStyle`
@font-face {
  font-family: "ItalianStyleLtIt";
  src:url(${ItalianStyleLtIt}) format("woff")}
`;
