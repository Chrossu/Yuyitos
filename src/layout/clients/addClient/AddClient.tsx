import React from 'react'
import { useDispatch } from 'react-redux'

import { } from './addClient.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { FlexContainer, CardContainer } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'

import { createLoadingSelector } from 'utils/generalFunctions'
import { FETCH_PRODUCTS } from 'utils/generalConstants'
import { ClientForm } from 'types/store/clients'
import { addClient } from 'store/actions/clients.actions'

interface ComponentProps {

}

const AddClient: React.FC<ComponentProps> = () => {
  // const productsState: ProductReducer = useSelector((state: AppState) => state.user)

  const [formState, setFormState] = React.useState<ClientForm>({
    rut: '',
    name: '',
    paternal_surname: '',
    maternal_surname: '',
    email: '',
    phone: ''
  })

  const dispatch = useDispatch()
  const { rut, name, paternal_surname, maternal_surname, email, phone } = formState

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormState({ ...formState, [name]: value })
  }

  const loadingSelector = createLoadingSelector([FETCH_PRODUCTS])
  // const isFetchingClients = useSelector((state: AppState) => loadingSelector(state))

  const handleAddButton = () => {
    dispatch(addClient(formState))
    setFormState({
      rut: '',
      name: '',
      paternal_surname: '',
      maternal_surname: '',
      email: '',
      phone: ''
    })
  }

  return (
    <>
      <CardContainer header>
        Añadir nuevo cliente
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={rut}
              id='rut'
              label='Rut cliente'
              placeholder='Ingresa rut de cliente'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={name}
              id='name'
              label='Nombre cliente'
              placeholder='Ingresa nombre de cliente'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={paternal_surname}
              id='paternal_surname'
              label='Apellido paterno'
              placeholder='Ingrese apellido paterno'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={maternal_surname}
              id='maternal_surname'
              label='Apellido materno'
              placeholder='Ingrese apellido materno'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>

        <FlexContainer marginTop='2rem'>
          <FlexContainer width='25%'>
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
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content' onClick={handleAddButton}>
          Crear nuevo cliente
        </Button>
      </CardContainer>
    </>
  )
}

export default AddClient