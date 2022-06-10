import { createGlobalStyle } from 'styled-components';
import ItalianStyleLtIt from './ItalianStyleLtIt.woff';
import NanumMyeongjo from './NanumMyeongjo.ttf';

export default createGlobalStyle`
@font-face {
  font-family: "ItalianStyleLtIt";
  src:url(${ItalianStyleLtIt}) format("woff")};

@font-face {
font-family: "NanumMyeongjo";
src:url(${NanumMyeongjo}) format("ttf")};
`;
