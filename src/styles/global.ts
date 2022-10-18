import { createGlobalStyle } from 'styled-components';
import normalizeCss from 'normalize.css';

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
 }
 html, body, #root{
  height: 100vh;
  width: 100vw;
  max-width: 1920px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  margin: 0 auto;
 }
 ${normalizeCss}
 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-Regular.ttf"), url("/src/assets/fonts/Lato-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
 }

 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-Italic.ttf"), url("/src/assets/fonts/Lato-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
 }

 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-Heavy.ttf") url("/src/assets/fonts/Lato-Heavy.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
 }
 
 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-HeavyItalic.ttf") url("/src/assets/fonts/Lato-HeavyItalic.ttf") format("truetype");
  font-weight: 800;
  font-style: italic;
 }
 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-Bold.ttf") url("/src/assets/fonts/Lato-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
 }
 @font-face {
  font-family: "Lato";
  src: local("/src/assets/fonts/Lato-BoldItalic.ttf") url("/src/assets/fonts/Lato-BoldItalic.ttf") format("truetype");
  font-weight: 700;
  font-style: italic;
 }
`;
