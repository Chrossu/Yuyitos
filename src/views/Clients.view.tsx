import React from 'react'

import { Tabs } from 'components/navigation'

import { ClientsPaymentCredit, AddClient, ClientsManagement } from 'layout/clients'
import { Tab } from 'types/generals'

interface ComponentProps {

}

const components: Tab[] = [
  { label: 'Pago deudas', component: ClientsPaymentCredit },
  { label: 'Añadir cliente', component: AddClient },
  { label: 'Administrar clientes', component: ClientsManagement }
]

const ClientsView: React.FC<ComponentProps> = props => {
  return (
    <Tabs components={components} />
  )
}

export default ClientsView