import React from 'react'

import { StyledFormContainer, StyledTitle, StyledInputsContainer, StyledInputGroup, StyledInput, StyledLabel } from './login.style'
import Button from 'components/buttons/button/Button'

interface ComponentProps {

}

const Login: React.FC<ComponentProps> = props => {
  return (
    <StyledFormContainer>
      <StyledTitle>¡Bienvenido de vuelta!</StyledTitle>
      <StyledInputsContainer>
        {/* Email input */}
        <StyledInputGroup>
          <StyledInput id='email' type='text' required />
          <StyledLabel htmlFor='email'>Ingresa correo electrónico</StyledLabel>
        </StyledInputGroup>
      </StyledInputsContainer>
      {/* Password input */}
      <StyledInputGroup>
        <StyledInput id='password' type='text' required />
        <StyledLabel htmlFor='password'>Ingresa contraseña</StyledLabel>
      </StyledInputGroup>
      <Button color='primary' width='100%' padding='1rem'>Iniciar sesión</Button>
    </StyledFormContainer>
  )
}

export default Login