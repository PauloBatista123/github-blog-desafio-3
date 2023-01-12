import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`
