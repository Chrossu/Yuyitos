import React from 'react'

// import { } from './addProvider.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import CardContainer from 'components/cards/cardContainer/CardContainer'
import Input from 'components/inputs/input/Input'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import Button from 'components/buttons/button/Button'

interface ComponentProps {

}

const AddProvider: React.FC<ComponentProps> = props => {
  return (
    <>
      <CardContainer header>
        Añadir nuevo proveedor
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <Input id='productName' label='Nombre proveedor' placeholder='Ingresa nombre proveedor' width='80%' />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input id='sellPrice' label='Precio de venta' placeholder='Ingresa precio de venta' width='80%' />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input id='sellPrice' label='Dirección' placeholder='Ingresa dirección' width='80%' />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input id='sellPrice' label='Fono contacto' placeholder='Ingresa fono' width='80%' />
          </FlexContainer>
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content'>Añadir producto</Button>
      </CardContainer>
    </>
  )
}

export default AddProvider