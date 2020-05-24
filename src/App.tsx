import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Route, Switch } from 'react-router-dom'

import { lightTheme, darkTheme } from './utils/global.theme'
import { GlobalStyles } from './global'
import { AppState } from 'store/configureStore'
import { Theme } from 'types/theme/Theme'
import { LIGHT } from './utils/constants'

import Sidebar from 'components/layout/sidebar/Sidebar'
import HomeView from 'components/views/Home.view'
import SellsView from 'components/views/Sells.view'
import ClientsView from 'components/views/Clients'
import ProvidersView from 'components/views/Providers.view'
import StatsView from 'components/views/Stats.view'

interface ComponentProps {
  theme: Theme
}

const App: React.FC<ComponentProps> = ({ theme }) => {
  return (
    <>
      <Sidebar />
      <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/ventas' component={SellsView} />
          <Route exact path='/clientes' component={ClientsView} />
          <Route exact path='/proveedores' component={ProvidersView} />
          <Route exact path='/estadisticas' component={StatsView} />
        </Switch>
      </ThemeProvider>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(App)
