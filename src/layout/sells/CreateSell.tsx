import React from 'react'

import { } from './'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { CardContainer, FlexContainer } from 'components/cards'
import { Button } from 'components/buttons'
import { OwnProductsTable, SelectedOwnProductsTable } from 'components/tables'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from 'types/store/product'
import { Input, Checkbox, SelectInput } from 'components/inputs'
import { Paragraph } from 'components/texts'
import { AppState } from 'store/configureStore'
import { Client } from 'types/store/clients'
import { fetchClients } from 'store/actions/clients.actions'
import { SelectOption } from 'types/generals'

interface ComponentProps {

}

const CreateSell: React.FC<ComponentProps> = props => {
  const dispatch = useDispatch()

  const stateProductsArray: any = useSelector((state: any) => state.products.products)
  const stateClientsArray: any = useSelector((state: AppState) => state.clients)

  // Items on left table that are filtered depending on user actions
  const [productsArray, setProductsArray] = React.useState<Product[]>([])

  const [clientsForSelect, setClientsForSelect] = React.useState<SelectOption[]>([])

  // Items on left table that are filtered depending on user actions
  const [filteredProductsArray, setFilteredProductsArray] = React.useState<Product[]>([])

  // Items that provider will provide on right table
  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [isOnCredit, setIsOnCredit] = React.useState<boolean>(false)

  React.useEffect(() => {
    dispatch(fetchClients())
  }, [])

  React.useEffect(() => {
    setProductsArray(stateProductsArray)
  }, [stateProductsArray])

  React.useEffect(() => {
    setTotalPrice(() => selectedProductsArray.reduce((acc: number, prod: Product) => acc + (Number(prod.productSellPrice) * Number(prod.stockToSell)), 0))
  }, [selectedProductsArray])

  React.useEffect(() => {
    if (clientsForSelect.length === 0)
      setClientsForSelect(() => stateClientsArray.map((client: Client) => ({ value: client.id, label: `${client.name} ${client.paternalLastName}` })))
  }, [stateClientsArray])

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, { index }: any) => {
    let newSelectedProductsArray: Product[] = [...selectedProductsArray]
    newSelectedProductsArray[index].stockToSell = e.currentTarget.value

    setSelectedProductsArray(newSelectedProductsArray)
  }

  const setSelectedProduct = (selectedProduct: Product) => {
    const setSelectedProduct: Product = { ...selectedProduct, stockToSell: '1' }
    setSelectedProductsArray([...selectedProductsArray, setSelectedProduct])
    setProductsArray(() => productsArray.filter(product => product.id !== selectedProduct.id))
  }

  const leftTableColumns = [
    {
      Header: 'ID',
      accessor: 'id',
      width: 50,
      style: { textAlign: 'center', margin: 'auto' }
    },
    {
      Header: 'Nombre',
      accessor: 'productName',
      style: { margin: 'auto' }
    },
    {
      Header: 'Precio',
      width: 70,
      accessor: 'productSellPrice',
      style: { textAlign: 'center' }
    },
    {
      Header: 'Stock',
      width: 70,
      accessor: 'stockQuantity',
      style: { textAlign: 'center' }
    }
  ]

  const rightTableColumns = [
    {
      Header: 'Producto',
      accessor: 'productName',
      style: { margin: 'auto' }
    },
    {
      Header: 'Cantidad',
      id: 'quantity',
      Cell: (rowInfo: any) => (
        <Input value={rowInfo.original.stockToSell} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleQuantityChange(e, rowInfo)} />
      ),
      style: { margin: 'auto' },
      width: 150
    }
  ]

  const onRowClick = (_: any, rowInfo: any) => {
    if (rowInfo && rowInfo.row)
      return { onClick: () => setSelectedProduct(productsArray[rowInfo.index]) }
    return {}
  }

  const handleOnCredit = () => setIsOnCredit(!isOnCredit)

  return (
    <>
      <CardContainer header>
        Crear nueva venta
      </CardContainer>
      <CardContainer justifyContent='space-between' padding='0' flexDirection='column'>
        <FlexContainer>
          <FlexContainer width='55%'>
            <OwnProductsTable
              productsArray={productsArray}
              customColumns={leftTableColumns}
              onSelectProduct={() => null}
              onRowClick={onRowClick}
            />
          </FlexContainer>
          <FlexContainer width='44%' flexDirection='column' alignItems='flex-end' padding='1rem'>
            <SelectedOwnProductsTable
              selectedProductsArray={selectedProductsArray}
              columns={rightTableColumns}
              padding='0'
            />
            <CardContainer header borderRadius='0' height='fit-content' margin='1rem 0 0'>
              <Paragraph fontSize='1.2rem'>Total: ${totalPrice}</Paragraph>
            </CardContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer padding='0 1rem 1rem' justifyContent='center' flexDirection='column'>
          <Checkbox isChecked={isOnCredit} label='¿Es fiado?' onClick={handleOnCredit} />
          {
            isOnCredit && (
              <SelectInput
                margin='1rem 0'
                options={clientsForSelect}
                width='200px'
                label='Escriba el nombre a ingresar'
                placeholder='Seleccione cliente'
                onChange={() => { }}
              />
            )
          }
        </FlexContainer>
        <FlexContainer padding='0 1rem 1rem'>
          <Button color='primary' width='250px' marginRight='1rem' svg={<AddSVG />} fontSize='1.1rem'>Crear venta</Button>
          <Button hollow color='primary' width='120px' fontSize='1.1rem'>Cancelar</Button>
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default CreateSell