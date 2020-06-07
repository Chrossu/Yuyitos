import React from 'react'

import { } from './'

import { ReactComponent as AddSVG } from 'layout/svg-repo/add.svg'
import { CardContainer, FlexContainer } from 'components/cards'
import { Button } from 'components/buttons'
import SellsProductsTable from './SellsProductsTable'
import { OwnProductsTable, SelectedOwnProductsTable } from 'components/tables'
import { useSelector } from 'react-redux'
import { AppState } from 'store/configureStore'
import { Product } from 'types/product'
import { Input } from 'components/inputs'

interface ComponentProps {

}

const CreateSell: React.FC<ComponentProps> = props => {
  const stateProductsArray: any = useSelector((state: any) => state.products.products)

  // Items on left table that are filtered depending on user actions
  const [productsArray, setProductsArray] = React.useState<Product[]>(stateProductsArray)

  // Items on left table that are filtered depending on user actions
  const [filteredProductsArray, setFilteredProductsArray] = React.useState<Product[]>([])

  // Items that provider will provide on right table
  const [selectedProductsArray, setSelectedProductsArray] = React.useState<Product[]>([])

  React.useEffect(() => {
    setProductsArray(stateProductsArray)
  }, [stateProductsArray])

  React.useEffect(() => {
    console.log(selectedProductsArray.reduce((acc: number, prod: Product) => acc + (Number(prod.productSellPrice) * Number(prod.stockToSell)), 0))
  }, [selectedProductsArray])

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
    },
    // {
    //   Header: 'Acciones',
    //   Cell: (rowInfo: any) => (
    //     <Input value={rowInfo.original.productBuyPrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePriceChange(e, rowInfo)} />
    //   ),
    //   width: 135
    // }
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
      return {
        onClick: (e: any) => {
          setSelectedProduct(productsArray[rowInfo.index])
        }
      }
    return {}
  }

  return (
    <>
      <CardContainer header>
        Crear nueva venta
      </CardContainer>
      <CardContainer justifyContent='space-between' padding='0'>
        <FlexContainer width='55%'>
          <OwnProductsTable
            productsArray={productsArray}
            customColumns={leftTableColumns}
            onSelectProduct={() => null}
            onRowClick={onRowClick}
          />
        </FlexContainer>
        <FlexContainer width='44%' justifyContent='flex-end'>
          <SelectedOwnProductsTable
            selectedProductsArray={selectedProductsArray}
            columns={rightTableColumns}
          />
          
        </FlexContainer>
      </CardContainer>
    </>
  )
}

export default CreateSell