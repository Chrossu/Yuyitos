import React from 'react'
import { useSelector } from 'react-redux'

import { } from './addProduct.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { FlexContainer, CardContainer } from 'components/cards'
import { Input, SelectInput } from 'components/inputs'
import { Button } from 'components/buttons'

import { createLoadingSelector } from 'utils/generalFunctions'
import { AppState } from 'store/configureStore'
import { FETCH_PRODUCTS } from 'utils/generalConstants'
import { SelectOption } from 'types/generals'
import { ProductReducer } from 'types/product'

interface ComponentProps {

}

type FormState = {
  productName: string
  sellPrice: string
  productKind: string
  productType: string
  stockQuantity: string
}

const AddProduct: React.FC<ComponentProps> = props => {
  const productsState: ProductReducer = useSelector((state: AppState) => state.products)
  const { products, productBrands, productTypes } = productsState

  const [{ productName, sellPrice, productKind, stockQuantity }, setFormState] = React.useState<FormState>({
    productName: '',
    sellPrice: '',
    productKind: '',
    productType: '',
    stockQuantity: ''
  })

  const [productsForSelect, setProductsForSelect] = React.useState<SelectOption[]>([])
  const [productTypesForSelect, setProductTypesForSelect] = React.useState<SelectOption[]>([])
  const [brandsForSelect, setBrandsForSelect] = React.useState<SelectOption[]>([])

  React.useEffect(() => {
    setProductsForSelect(() => products.map(product => ({
      value: product.id,
      label: product.productName
    })))
  }, [products])

  React.useEffect(() => {
    setProductTypesForSelect(() => productTypes.map(type => ({
      value: type.id,
      label: type.productTypeName
    })))
  }, [productTypes])

  React.useEffect(() => {
    setBrandsForSelect(() => productBrands.map(brand => ({
      value: brand.id,
      label: brand.brandName
    })))
  }, [productBrands])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormState((s) => ({ ...s, [name]: value }))
  }

  const onSelectProductType = (selectedOption: any) => {
    const type = productTypes.find(type => type.id === selectedOption.value)

    if (!type)
      return
  }

  const onSelectBrand = (selectedOption: any) => {
    const brand = productBrands.find(brand => brand.id === selectedOption.value)

    if (!brand)
      return
  }

  const loadingSelector = createLoadingSelector([FETCH_PRODUCTS])
  const isFetchingProducts = useSelector((state: AppState) => loadingSelector(state))

  return (
    <>
      <CardContainer header>
        Añadir nuevo producto
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={productName}
              id='productName'
              label='Nombre producto'
              placeholder='Ingresa nombre de producto'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={sellPrice}
              id='sellPrice'
              label='Precio de venta'
              placeholder='Ingresa precio de venta'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <SelectInput
              options={productTypesForSelect}
              id='productType'
              label='Tipo de producto'
              placeholder='Seleccione tipo'
              width='80%'
              onChange={onSelectProductType}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <SelectInput
              options={brandsForSelect}
              id='stockQuantity'
              label='Marca de producto'
              placeholder='Seleccione marca'
              width='80%'
              onChange={onSelectBrand}
            />
          </FlexContainer>
          {/* <FlexContainer width='25%'>
            <Input
              disabled
              value={stockQuantity}
              id='stockQuantity'
              label='Stock'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer> */}
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content'>Añadir producto</Button>
      </CardContainer>
    </>
  )
}

export default AddProduct