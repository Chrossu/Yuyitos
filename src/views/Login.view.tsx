import React from 'react'

import Login from 'layout/login/Login'

interface ComponentProps {

}

const LoginView: React.FC<ComponentProps> = props => {
  return (
    <>
    <Login />
    </>
  )
}

export default LoginView