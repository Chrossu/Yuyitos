import * as React from 'react'

import { } from './addProduct.style'
import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'

interface ComponentProps {

}

const AddProduct: React.FC<ComponentProps> = props => {
  return (
    <>
      <CardContainer header>
        Añadir producto
      </CardContainer>
      <CardContainer>
        <Input id='name' label='Nombre' placeholder='Ingresa nombre' />
      </CardContainer>
    </>
  )
}

export default AddProduct