import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
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

  button {
    border: none;
    background: none;
  }

  :root {
    --bg-color: #F8FAFC;
    --box-color: #fff;
    --text-color: #222;
    --accent-color: #4579FF;
    --border-color: #BCCCDC;
    --border2-color: #9AA6B2;
    --gray-color: #ccc;
    --sun-color: #FF9479;
    --moon-color: #FFE388;
    --shadow-color: 0px 15px 50px 0px rgba(154, 166, 178, 0.15);
    --shadow2-color: 0px 5px 10px 0px rgba(154, 166, 178, 0.15);
    --freesentation: 'Freesentation';
    --paperlogy: 'Paperlogy';
  }

  html.dark {
  --bg-color: #1e1f24;
  --box-color: #2a2b30;
  --text-color: #eeeeee; 
  --accent-color: #4aa5f0;
  --border-color: #444c56; 
  --border2-color: #666c75;
  --gray-color: #999999;   
  --shadow-color: 0px 15px 40px 0px rgba(0, 0, 0, 0.5);
  --shadow2-color: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
}
`;

export default GlobalStyles;
