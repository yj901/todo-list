import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
}
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'Freesentation';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-3Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Freesentation';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-4Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Freesentation';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-5Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}

  * {
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-size: 62.5%;
  }
/* 
  html.dark {
  --bg-color: #121212;
  --text-color: #eeeeee;
  --accent-color: #00bcd4;
} */

  body {
    font-size: 1.6rem;
    width: 100%;
    height: 100vh;
    position: relative;
    font-family: 'Freesentation';
    font-weight: 400;
    background: var(--bg-color);
    color: var(--text-color)
  }

  :root {
    --bg-color: #F8FAFC;
    --text-color: #222;
    --accent-color: #4579FF;
    --border-color: #BCCCDC;
    --border2-color: #9AA6B2;
    --gray-color: #ccc;
    --sun-color: #FF9479;
    --moon-color: #FFE388;
    --freesentation: 'Freesentation';
    --paperlogy: 'Paperlogy';
  }
`;

export default GlobalStyles;
