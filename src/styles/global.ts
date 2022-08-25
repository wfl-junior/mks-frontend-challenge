import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ${({ theme }) => css`
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.primary};
    `}
  }

  body, input, textarea, button, select {
    font: 400 1rem ${({ theme }) => theme.fonts.primary};
    line-height: 1.2;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
  }

  input {
    border: 0;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    
    50% {
      opacity: .5;
    }
  }
`;
