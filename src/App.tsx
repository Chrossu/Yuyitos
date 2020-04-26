import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/theme'
import { GlobalStyles } from './global'
import { LIGHT, DARK } from './utils/constants'

const App: React.FC = props => {
  const [theme, setTheme] = React.useState<string>(LIGHT)
  
  const handleSetTheme = () => {
    setTheme(() => theme === LIGHT ? DARK : LIGHT)
  }

  return (
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={handleSetTheme}>Toggle theme</button>
        <h1>It's a light theme!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
