import React from 'react'

import { } from './addProduct.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import Button from 'components/buttons/button/Button'

interface ComponentProps {

}

const AddProduct: React.FC<ComponentProps> = props => {
  return (
    <>
      <CardContainer header>
        Añadir nuevo producto
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='50%'>
            <Input id='productName' label='Nombre producto' placeholder='Ingresa nombre de producto' width='80%' />
          </FlexContainer>
          <FlexContainer width='50%'>
            <Input id='sellPrice' label='Precio de venta' placeholder='Ingresa precio de venta' width='80%' />
          </FlexContainer>
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content'>Añadir producto</Button>
      </CardContainer>
    </>
  )
}

export default AddProduct