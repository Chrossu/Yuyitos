import React from 'react'

import { } from './addProduct.style'
import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

interface ComponentProps {

}

const AddProduct: React.FC<ComponentProps> = props => {
  return (
    <>
      <CardContainer header>
        Añadir nuevo producto
      </CardContainer>
      <CardContainer>
        <FlexContainer width='50%'>
          <Input id='productName' label='Nombre producto' placeholder='Ingresa nombre de producto' width='80%' />
        </FlexContainer>
        <FlexContainer width='50%'>
          <Input id='sellPrice' label='Precio de venta' placeholder='Ingresa precio de venta' width='80%' />
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default AddProduct