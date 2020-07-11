import { createGlobalStyle } from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    align-items: center;
    background: ${({ theme }: Props) => theme.defaultHollowBackground};
    color: ${({ theme }) => theme.defaultText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 15px;
    transition: all 0.25s linear;
  }

  input {
    border: 1px solid ${({ theme }: Props) => theme.inputBorder} !important;
  }

  hr {
    border-color: ${({ theme }: Props) => theme.lightBorder};
  }

  body, input {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  input:focus {
    border-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 0.1rem ${({ theme }) => theme.primaryColor}54;
    outline: transparent;
  }

  .ReactTable {
    .rt-thead.-header {
      box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    }

    .rt-noData {
      background: ${({ theme }: Props) => theme.defaultPrimaryBackground};
      color: ${({ theme }: Props) => theme.defaultText};
      border: 2px solid ${({ theme }: Props) => theme.lightBorder};
      border-radius: 3px;
      transition: all 0.25s linear;
    }

    .-pagination .-btn {
      opacity: 0.9;
      color: ${({ theme }) => theme.textWithSecondary};
      background: ${({ theme }: Props) => theme.secondaryColor};

      &:hover, &:not([disabled]):hover {
        background: ${({ theme }: Props) => theme.secondaryColor};
        opacity: 1;
      }

      &.-btn[disabled] {
        opacity: 0.3;
        color: ${({ theme }: Props) => theme.textWithPrimary};

        &:hover {
          opacity: 0.35;
        }
      }
    }
    
    .-pagination input, .-pagination select {
      background: ${({ theme }: Props) => theme.defaultPrimaryBackground};
      color: ${({ theme }) => theme.defaultText};
      transition: color 0.25s linear, background 0.25s linear;
    }
  }

`