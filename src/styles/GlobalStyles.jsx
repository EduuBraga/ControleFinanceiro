import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-main: #55CF95;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }
  body{
    background-color: ${({theme})=> theme.bg}; 
  }
`