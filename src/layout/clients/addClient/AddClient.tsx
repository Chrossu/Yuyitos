import React from 'react'
import { useSelector } from 'react-redux'

import { } from './addClient.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { FlexContainer, CardContainer } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'

import { createLoadingSelector } from 'utils/generalFunctions'
import { AppState } from 'store/configureStore'
import { FETCH_PRODUCTS } from 'utils/generalConstants'
import { ClientForm } from 'types/store/clients'

interface ComponentProps {

}

type FormState = {
  productName: string
  sellPrice: string
  productKind: string
  productType: string
  stockQuantity: string
}

const AddClient: React.FC<ComponentProps> = props => {
  // const productsState: ProductReducer = useSelector((state: AppState) => state.user)

  const [{ name, paternalLastName, maternalLastName, email, phone }, setFormState] = React.useState<ClientForm>({
    name: '',
    paternalLastName: '',
    maternalLastName: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormState((s) => ({ ...s, [name]: value }))
  }

  const loadingSelector = createLoadingSelector([FETCH_PRODUCTS])
  const isFetchingClients = useSelector((state: AppState) => loadingSelector(state))

  return (
    <>
      <CardContainer header>
        Añadir nuevo cliente
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='33%'>
            <Input
              value={name}
              id='name'
              label='Nombre cliente'
              placeholder='Ingresa nombre de cliente'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='33%'>
            <Input
              value={paternalLastName}
              id='paternalLastName'
              label='Apellido paterno'
              placeholder='Ingrese apellido paterno'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='33%'>
            <Input
              value={maternalLastName}
              id='maternalLastName'
              label='Apellido materno'
              placeholder='Ingrese apellido materno'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>

        <FlexContainer marginTop='2rem'>
          <FlexContainer width='33%'>
            <Input
              value={email}
              id='email'
              label='Correo electrónico'
              placeholder='Ingrese apellido paterno'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='22%'>
            <Input
              value={phone}
              id='phone'
              label='Fono contacto'
              placeholder='Ingrese fono de contacto'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content'>Crear nuevo cliente</Button>
      </CardContainer>
    </>
  )
}

export default AddClient