import React from 'react'
import { CardContainer, FlexContainer } from 'components/cards'
import { SelectInput, Input } from 'components/inputs'
import { SelectOption } from 'types/generals'
import { AppState } from 'store/configureStore'
import { useSelector } from 'react-redux'

type ComponentProps = {

}

const ClientsManagement: React.FC<ComponentProps> = props => {
  const clients = useSelector((state: AppState) => state.clients)

  const [clientsForSelect, setClientsForSelect] = React.useState<SelectOption[]>([])
  const [debt, setDebt] = React.useState<string>('')
  const [paymentCredit, setPaymentCredit] = React.useState<string>('')


  React.useEffect(() => {
    if (clientsForSelect.length === 0)
      setClientsForSelect(clients.map(client => ({ value: client.id, label: client.name })))
  }, [clients])

  const onSelectClient = (selectedOption: any) => {
    const client = clients.find(client => client.id === selectedOption.value)

    if (!client)
      return

    setDebt('10')
  }

  const handlePaymentCreditChange = (e: React.ChangeEvent<HTMLInputElement>) => setPaymentCredit(e.currentTarget.value)

  return (
    <>
      <CardContainer header>
        Panel de administración de clientes
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <SelectInput
              options={clientsForSelect}
              label='Cliente'
              width='80%'
              placeholder='Seleccione cliente'
              onChange={onSelectClient}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={debt}
              id='debt'
              label='Deuda actual'
              width='80%'
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={paymentCredit}
              id='paymentCredit'
              label='Valor a pagar'
              width='80%'
              onChange={handlePaymentCreditChange}
            />
          </FlexContainer>
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default ClientsManagement