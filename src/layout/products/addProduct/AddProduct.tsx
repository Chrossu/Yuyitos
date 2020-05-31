import React from 'react'

import { } from './addProduct.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import CardContainer from 'components/cards/cardContainer/CardContainer'
import { Input } from 'components/inputs'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import Button from 'components/buttons/button/Button'

interface ComponentProps {

}

type FormState = {
  productName: string
  sellPrice: string
}

const AddProduct: React.FC<ComponentProps> = props => {
  const [{ productName, sellPrice }, setFormState] = React.useState<FormState>({
    productName: '',
    sellPrice: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormState((s) => ({ ...s, [name]: value }))
  }

  return (
    <>
      <CardContainer header>
        Añadir nuevo producto
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='50%'>
            <Input
              value={productName}
              id='productName'
              name='productName'
              label='Nombre producto'
              placeholder='Ingresa nombre de producto'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='50%'>
            <Input
              value={sellPrice}
              id='sellPrice'
              name='sellPrice'
              label='Precio de venta'
              placeholder='Ingresa precio de venta'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content'>Añadir producto</Button>
      </CardContainer>
    </>
  )
}

export default AddProduct