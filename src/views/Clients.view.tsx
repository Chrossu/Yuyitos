import React, { useEffect } from 'react'

import { Tabs } from 'components/navigation'

import { ClientsPaymentCredit, AddClient, ClientsManagement } from 'layout/clients'
import { Tab } from 'types/generals'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClients } from 'store/actions/clients.actions'
import { AppState } from 'store/configureStore'

const COMPONENTS: Tab[] = [
  { label: 'Pago deudas', component: ClientsPaymentCredit },
  { label: 'Añadir cliente', component: AddClient },
]

const ClientsView: React.FC = () => {
  const dispatch = useDispatch()
  const [componentTabs, setComponentTabs] = React.useState<Tab[]>(COMPONENTS)

  const user: any = useSelector((state: AppState) => state.user)

  React.useEffect(() => {
    let initialNavItems = COMPONENTS

    if (!!user.id && user.user_kind.id == 1)
      initialNavItems = [
        ...initialNavItems,
        { label: 'Administrar clientes', component: ClientsManagement },
      ]

    setComponentTabs(initialNavItems)
  }, [user])

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
    <Tabs components={!!componentTabs && componentTabs} />
  )
}

export default ClientsView