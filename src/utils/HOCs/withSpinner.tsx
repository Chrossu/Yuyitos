import React from 'react'

import { Spinner } from 'components/utilities-components'


const WithSpinner = (WrappedComponent: any) => ({ isLoading, ...props }: any) => {
  return isLoading ?
    <Spinner />
    :
    <WrappedComponent {...props} />
}

export default WithSpinner