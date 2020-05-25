import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Route, Switch } from 'react-router-dom'

import { lightTheme, darkTheme } from './utils/global.theme'
import { GlobalStyles } from './global'
import { AppState } from 'store/configureStore'
import { Theme } from 'types/theme/Theme'
import { LIGHT } from './utils/constants'

import Sidebar from 'layout/sidebar/Sidebar'
import SellsView from 'views/Sells.view'
import ClientsView from 'views/Clients'
import ProductsView from 'views/Products.view'
import ProvidersView from 'views/Providers.view'
import StatsView from 'views/Stats.view'
import { MainContainer } from 'components/cards/mainContainer/MainContainer'

interface ComponentProps {
  theme: Theme
}

const App: React.FC<ComponentProps> = ({ theme }) => {
  return (
    <>
      <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
        <Sidebar />
        <GlobalStyles />
        <MainContainer>
          <Switch>
            <Route exact path='/' component={SellsView} />
            <Route exact path='/clientes' component={ClientsView} />
            <Route exact path='/productos' component={ProductsView} />
            <Route exact path='/proveedores' component={ProvidersView} />
            <Route exact path='/estadisticas' component={StatsView} />
          </Switch>
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(App)
