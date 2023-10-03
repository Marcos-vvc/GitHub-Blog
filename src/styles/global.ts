import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
    @media (max-width: 1024px) {
      font-size: 93.75%; /* 15px */
    }

    @media (max-width: 768px) {
      font-size: 87.5%; /* 14px */
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['blue-normal']};
  }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 0.5px ${(props) => props.theme['#3294F8']};
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }

`
