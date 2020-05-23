import * as React from 'react'
import { connect } from 'react-redux'
import { LIGHT } from 'utils/constants'
import { AppState } from 'store/configureStore'

interface ComponentProps {
  theme: string
}

const HomeView: React.FC<ComponentProps> = ({ theme }) => {
  return (
    <>
      {
        theme === LIGHT ?
          <h1>¡Es un tema claro!</h1>
          :
          <h1>¡Es un tema oscuro!</h1>
      }
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(HomeView)