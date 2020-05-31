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
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  input:focus {
    border-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 0.1rem ${({ theme }) => theme.primaryColor}54;
    outline: transparent;
  }
  }
`