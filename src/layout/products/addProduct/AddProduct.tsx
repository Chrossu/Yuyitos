import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { } from './addProduct.style'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { FlexContainer, CardContainer } from 'components/cards'
import { Input, SelectInput } from 'components/inputs'
import { Button } from 'components/buttons'

import { createLoadingSelector } from 'utils/generalFunctions'
import { AppState } from 'store/configureStore'
import { FETCH_PRODUCTS } from 'utils/generalConstants'
import { SelectOption } from 'types/generals'
import { ProductReducer } from 'types/store/product'
import { addProduct } from 'store/actions/products.actions'

export type AddProductFormState = {
  name: string
  sell_price: string
  critical_stock: string
  brand_id: number
  product_family_id: number
}

const AddProduct: React.FC = props => {
  const productsState: ProductReducer = useSelector((state: AppState) => state.products)
  const { products, productBrands, productTypes, productFamilies } = productsState
  const dispatch = useDispatch()
  const [formState, setFormState] = React.useState<AddProductFormState>({
    name: '',
    sell_price: '',
    critical_stock: '',
    brand_id: null as unknown as number,
    product_family_id: null as unknown as number,
  })

  const { name, sell_price, critical_stock, brand_id, product_family_id } = formState

  const [productsForSelect, setProductsForSelect] = React.useState<SelectOption[]>([])
  const [productFamiliesForSelect, setProductFamiliesForSelect] = React.useState<SelectOption[]>([])
  const [brandsForSelect, setBrandsForSelect] = React.useState<SelectOption[]>([])
  const [productType, setProductType] = React.useState<string>('')

  React.useEffect(() => {
    setProductsForSelect(() => products.map(product => ({
      value: product.id,
      label: product.name
    })))
  }, [products])

  React.useEffect(() => {
    setProductFamiliesForSelect(() => productFamilies.map(type => ({
      value: type.id,
      label: type.name
    })))
  }, [productFamilies])

  React.useEffect(() => {
    setBrandsForSelect(() => productBrands.map(brand => ({
      value: brand.id,
      label: brand.name
    })))
  }, [productBrands])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormState({ ...formState, [name]: value })
  }

  const onSelectProductBrand = (selectedOption: any) => {
    const brand = productBrands.find(brand => brand.id === selectedOption.value)

    if (!brand)
      return

    setFormState({ ...formState, brand_id: brand.id })
  }

  const onSelectProductFamily = (selectedOption: any) => {
    const productFamily = productFamilies.find(familie => familie.id === selectedOption.value)

    if (!productFamily)
      return

    setFormState({ ...formState, product_family_id: productFamily.id })

    const productType = productTypes.find(type => type.id === productFamily.type_id)

    if (productType)
      setProductType(productType.name)
  }

  const handleClick = () => {
    dispatch(addProduct(formState))
  }
  
  const loadingSelector = createLoadingSelector([FETCH_PRODUCTS])
  const isFetchingProducts = useSelector((state: AppState) => loadingSelector(state))

  return (
    <>
      <CardContainer header>
        Añadir nuevo producto
      </CardContainer>
      <CardContainer flexDirection='column'>
        <FlexContainer marginBottom='1rem'>
          <FlexContainer width='25%'>
            <Input
              value={name}
              id='name'
              label='Nombre producto'
              placeholder='Ingresa nombre de producto'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={sell_price}
              id='sell_price'
              label='Precio de venta'
              placeholder='Ingresa precio de venta'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              value={critical_stock}
              id='critical_stock'
              label='Stock crítico'
              placeholder='Ingresa precio de venta'
              width='80%'
              onChange={handleChange}
            />
          </FlexContainer>
        </FlexContainer>
        <hr />
        <FlexContainer marginTop='1rem'>
          <FlexContainer width='25%'>
            <SelectInput
              options={productFamiliesForSelect}
              id='productFamily'
              label='Familia de producto'
              placeholder='Seleccione familia'
              width='80%'
              onChange={onSelectProductFamily}
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <Input
              disabled
              value={productType}
              id='productType'
              label='Tipo de producto'
              placeholder='...'
              width='80%'
            />
          </FlexContainer>
          <FlexContainer width='25%'>
            <SelectInput
              options={brandsForSelect}
              id='stockQuantity'
              label='Marca de producto'
              placeholder='Seleccione marca'
              width='80%'
              onChange={onSelectProductBrand}
            />
          </FlexContainer>
        </FlexContainer>
        <Button svg={<AddSVG />} color='primary' margin='2rem 0 0' width='fit-content' onClick={handleClick}>
          Añadir producto
        </Button>
      </CardContainer>
    </>
  )
}

export default AddProduct