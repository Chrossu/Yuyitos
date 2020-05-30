import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { lightTheme, darkTheme } from './utils/global.theme'
import { GlobalStyles } from './global'
import { AppState } from 'store/configureStore'

import { Theme } from 'types/theme/theme.type'
import { User } from 'types/user/User.type'
import { LIGHT } from './utils/generalConstants'

import { MainContainer } from 'components/cards'
import { ProtectedRouteHOC as ProtectedRoute } from 'utils/HOCs'

import Sidebar from 'layout/sidebar/Sidebar'
import { SellsView, LoginView, ClientsView, ProductsView, ProvidersView } from 'views'
import StatsView from 'views/Stats.view'

interface ComponentProps {
  theme: Theme
  user: User
}

const App: React.FC<ComponentProps> = ({ theme, user }) => {
  const isUser = !!user.id

  return (
    <ThemeProvider theme={theme !== LIGHT ? lightTheme : darkTheme}>
      <Sidebar isUser={isUser} />
      <GlobalStyles />
      <MainContainer isUser={isUser}>
        <Switch>
          <Route exact path='/login' component={LoginView} />
          <ProtectedRoute isAuthenticated={isUser} exact path='/' component={SellsView} />
          <ProtectedRoute isAuthenticated={isUser} exact path='/clientes' component={ClientsView} />
          <ProtectedRoute isAuthenticated={isUser} exact path='/productos' component={ProductsView} />
          <ProtectedRoute isAuthenticated={isUser} exact path='/proveedores' component={ProvidersView} />
          <ProtectedRoute isAuthenticated={isUser} exact path='/estadisticas' component={StatsView} />
        </Switch>
      </MainContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme,
  user: state.user
})

export default connect(mapStateToProps)(App)
