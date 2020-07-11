import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { useDispatch } from 'react-redux'

import { setStorageUser } from 'store/actions/user.actions'

import { Client } from 'types/store/clients'

export type ComponentProps = RouteProps & {
  isAuthenticated: boolean
  isAllowed?: boolean
}

export const ProtectedRoute: React.FC<ComponentProps> = ({ isAuthenticated, isAllowed = true, ...props }) => {
  let user
  let redirectPath = ''
  const dispatch = useDispatch()

  if (!isAuthenticated) {
    user = localStorage.getItem('user')

    if (!user) {
      redirectPath = '/login'
    } else {
      const parsedUser: Client = JSON.parse(user)
      console.log(parsedUser)
      dispatch(setStorageUser(parsedUser))
    }
  }

  if ((isAuthenticated || user) && !isAllowed) {
    redirectPath = '/restricted'
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />
    return <Route {...props} component={renderComponent} render={undefined} />
  } else {
    return <Route {...props} />
  }

}

export default ProtectedRoute