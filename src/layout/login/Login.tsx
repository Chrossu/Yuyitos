import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { StyledFormContainer, StyledTitle, StyledInputsContainer, StyledInputGroup, StyledInput, StyledLabel } from './login.style'
import Button from 'components/buttons/button/Button'
import { setUser } from 'store/actions/user.actions'
import { useHistory } from 'react-router-dom'

interface ComponentProps {

}

type ComponentState = {
  username: string
  password: string
}

const Login: React.FC<ComponentProps> = props => {
  const history = useHistory()

  const [{ username, password }, setState] = useState<ComponentState>({
    username: '',
    password: ''
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, [event.currentTarget.name]: event.currentTarget.value }))
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

  return (
    <StyledFormContainer>
      <StyledTitle>¡Bienvenido de vuelta!</StyledTitle>
      <StyledInputsContainer>
        {/* Email input */}
        <StyledInputGroup>
          <StyledInput id='username' name='username' type='text' required onChange={handleOnChange} />
          <StyledLabel htmlFor='username'>Ingresa nombre de usuario</StyledLabel>
        </StyledInputGroup>
      </StyledInputsContainer>
      {/* Password input */}
      <StyledInputGroup>
        <StyledInput id='password' name='password' type='password' required onChange={handleOnChange} />
        <StyledLabel htmlFor='password'>Ingresa contraseña</StyledLabel>
      </StyledInputGroup>
      <Button color='primary' width='100%' padding='1rem' onClick={handleLoginSubmit}>Iniciar sesión</Button>
    </StyledFormContainer>
  )
}

export default Login