import React from 'react'
import { ModifyProvider } from 'layout/providers'

interface ComponentProps {

}

const ProvidersView: React.FC<ComponentProps> = props => {
  return (
    <ModifyProvider />
  )
}

export default ProvidersView