import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { CardContainer, FlexContainer } from 'components/cards'
import { SelectInput, Input } from 'components/inputs'
import { Button } from 'components/buttons'
import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'

import { AppState } from 'store/configureStore'
import { SelectOption } from 'types/generals'

const ClientsPaymentCredit: React.FC = props => {
  const dispatch = useDispatch()
  const clients = useSelector((state: AppState) => state.clients)

  const [clientsForSelect, setClientsForSelect] = React.useState<SelectOption[]>([])
  const [clientID, setClientID] = React.useState<number | null>(null)
  const [creditID, setCreditID] = React.useState<number | null>(null)
  const [debt, setDebt] = React.useState<string>('')
  const [paymentCredit, setPaymentCredit] = React.useState<string>('')


  React.useEffect(() => {
    if (clientsForSelect.length === 0)
      setClientsForSelect(clients.map(client => ({ value: client.id, label: client.name })))
    // eslint-disable-next-line
  }, [clients])

  const onSelectClient = async (selectedOption: any) => {
    const res = await axios.get(`api/credit/${selectedOption.value}`)

    setDebt(res.data.debt)
    setCreditID(res.data.credit_id)
    setClientID(selectedOption.value)
  }

  const handlePaymentCreditChange = (e: React.ChangeEvent<HTMLInputElement>) => setPaymentCredit(e.currentTarget.value)
  const handleAddPaymentButton = async () => {
    if (Number(debt) - Number(paymentCredit) < 0)
      return dispatch({
        type: 'PAYMENT_FAILURE',
        payload: 'El valor a pagar no puede ser mayor al monto actual'
      })

    const data = {
      payment_credit: paymentCredit,
      credit_id: creditID
    }

    const res = await axios.post(`api/payments/${clientID}`, data)

    dispatch({
      type: 'PAYMENT_SET_ALERT',
      payload: res.data.response
    })
  }

  return (
    <>
      <CardContainer header>
        Pago de deudas de clientes
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
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content' onClick={handleAddPaymentButton}>
          Abonar deuda fiado
        </Button>
      </CardContainer>
    </>
  )
}

export default ClientsPaymentCredit