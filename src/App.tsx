import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './utils/global.theme'
import { GlobalStyles } from './global'
import { LIGHT } from './utils/constants'
import Sidebar from 'components/layout/sidebar/Sidebar'
import { AppState } from 'store/configureStore'
import { Theme } from 'types/theme/Theme'

interface ComponentProps {
  theme: Theme
}

const App: React.FC<ComponentProps> = ({ theme }) => {
  return (
    <>
      <Sidebar />
      <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
        <GlobalStyles />
        {
          theme === LIGHT ?
            <h1>¡Es un tema claro!</h1>
            :
            <h1>¡Es un tema oscuro!</h1>
        }
      </ThemeProvider>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(App)
