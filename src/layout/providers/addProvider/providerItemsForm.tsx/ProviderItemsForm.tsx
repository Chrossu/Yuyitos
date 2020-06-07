import React from 'react'

import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import { Input } from 'components/inputs'

import { Product } from 'types/product'
import { OwnProductsTable, SelectedOwnProductsTable } from 'components/tables'

interface ComponentProps {
  productsArray: Product[]
  selectedProductsArray: Product[]
  setSelectedProduct: (p: Product) => void
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>, ri: any) => void
}

const ProviderItemsForm: React.FC<ComponentProps> = props => {
  const { productsArray, selectedProductsArray, setSelectedProduct, handlePriceChange } = props

  const rightTableColumns = [
    {
      Header: 'Producto',
      accessor: 'productName',
      style: { margin: 'auto' }
    },
    {
      Header: 'Precio',
      accessor: 'productBuyPrice',
      Cell: (rowInfo: any) => (
        <Input value={rowInfo.original.productBuyPrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePriceChange(e, rowInfo)} />
      ),
      style: { margin: 'auto' },
      width: 150
    }
  ]

  return (
    <FlexContainer marginTop='30px' justifyContent='space-between'>
      <FlexContainer width='48%'>
        <OwnProductsTable
          productsArray={productsArray}
          onSelectProduct={setSelectedProduct}
          headerTitle='Productos actualmente registrados'
        />
      </FlexContainer>
      <FlexContainer flexDirection='column' width='48%'>
        <SelectedOwnProductsTable
          columns={rightTableColumns}
          selectedProductsArray={selectedProductsArray}
          headerTitle='Productos registrados a recibir'
        />
      </FlexContainer>
    </FlexContainer>
  )
}

export default ProviderItemsForm