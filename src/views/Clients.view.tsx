import React, { useEffect } from 'react'

import { Tabs } from 'components/navigation'

import { ClientsPaymentCredit, AddClient, ClientsManagement } from 'layout/clients'
import { Tab } from 'types/generals'
import { useDispatch } from 'react-redux'
import { fetchClients } from 'store/actions/clients.actions'

const components: Tab[] = [
  { label: 'Pago deudas', component: ClientsPaymentCredit },
  { label: 'Añadir cliente', component: AddClient },
  { label: 'Administrar clientes', component: ClientsManagement }
]

const ClientsView: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
    <Tabs components={components} />
  )
}

export default ClientsView