import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

  html{
    font-size: 62.5%;
    ${'' /* sroll-behaviour: smooth;
    1rem=10px; */}
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
  }

  h1,h2,h3,h4{
    font-family: "Work Sans", sans-serif;
  }

  h1{
    color: ${({theme}) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
  }

  h2{
    color: ${({theme})=> theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal
  }
  h3{
    font-size: 1.8rem;
    font-weight: 400;
  }
  p,button {
    color: ${({theme})=>theme.colors.text};
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .logo{
    height: 70px;
    weight: 250px;
  }

  `;