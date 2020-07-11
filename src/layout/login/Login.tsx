import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyledFormContainer, StyledTitle, StyledInputsContainer, StyledInputGroup, StyledInput, StyledLabel } from './login.style'
import Button from 'components/buttons/button/Button'
import { setUser } from 'store/actions/user.actions'
import { useHistory } from 'react-router-dom'
import { createLoadingSelector } from 'utils/generalFunctions'
import { AppState } from 'store/configureStore'
import { Spinner } from 'components/utilities-components'

interface ComponentProps {

}

type ComponentState = {
  username: string
  password: string
}

const Login: React.FC<ComponentProps> = props => {
  const history = useHistory()

  const [loginState, setLoginState] = useState<ComponentState>({
    username: '',
    password: ''
  })
  const { username, password } = loginState
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [event.currentTarget.name]: event.currentTarget.value })
  }

  const dispatch = useDispatch()

  const handleLoginSubmit = () => {
    const userPayload = {
      username,
      password
    }

    const redirectToHomepage = () => {
      history.push('/productos')
    }

    dispatch(setUser(userPayload, redirectToHomepage))
  }

  const loadingSelector = createLoadingSelector(['FETCH_USER'])
  const isFetchingProviders = useSelector((state: AppState) => loadingSelector(state))

  return (
    <StyledFormContainer>
      <StyledTitle>¡Bienvenido de vuelta!</StyledTitle>
      <StyledInputsContainer>
        {/* Email input */}
        <StyledInputGroup>
          <StyledInput autoComplete='off' id='username' name='username' type='text' required onChange={handleOnChange} />
          <StyledLabel htmlFor='username'>Ingrese nombre de usuario</StyledLabel>
        </StyledInputGroup>
      </StyledInputsContainer>
      {/* Password input */}
      <StyledInputGroup>
        <StyledInput autoComplete='off' id='password' name='password' type='password' required onChange={handleOnChange} />
        <StyledLabel htmlFor='password'>Ingrese contraseña</StyledLabel>
      </StyledInputGroup>
      {
        isFetchingProviders ? <Spinner />
          :
          <Button color='primary' width='100%' padding='1rem' onClick={handleLoginSubmit}>Iniciar sesión</Button>
      }
    </StyledFormContainer>
  )
}

export default Login