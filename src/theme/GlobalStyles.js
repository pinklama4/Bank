import {css } from '@emotion/react';

const GlobalStyle = css`

  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

  :root {
    --absolute-white: #fff;
    --absolute-black: #000;
    --green-60: #caff33;
    --green-65: #d1ff4d;
    --green-70: #d8ff66;
    --green-80: #e5ff99;
    --green-90: #f2ffcc;
    --green-95: #f8ffe5;
    --green-97: #fbfff0;
    --green-99: #fefffa;
    --white-90: #e4e4e7;
    --white-95: #f1f1f3;
    --white-97: #f7f7f8;
    --white-99: #fcfcfd;
    --grey-10: #1a1a1a;
    --grey-11: #1c1c1c;
    --grey-15: #262626;
    --grey-20: #333;
    --grey-30: #4c4c4d;
    --grey-35: #59595a;
    --grey-40: #656567;
    --grey-60: #98989a;
    --grey-70: #b3b3b3;
    --grey-75: #bfbfbf;
  }
  body {
    font-family: Lexend, sans-serif;
    background: #191919;
  }
  
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Links */

  a, a:link, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;

export default GlobalStyle;