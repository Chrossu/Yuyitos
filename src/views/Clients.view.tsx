import React from 'react'

import { Tabs } from 'components/navigation'

import AddClient from 'layout/clients/addClient'
import { Tab } from 'types/generals'

interface ComponentProps {

}

const components: Tab[] = [{ label: 'Añadir cliente', component: AddClient }]

const ClientsView: React.FC<ComponentProps> = props => {
  return (
    <Tabs components={components} />
    //  <AddClient />
  )
}

export default ClientsView