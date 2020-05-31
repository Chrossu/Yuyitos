import * as React from 'react'
import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'

import CardContainer from 'components/cards/cardContainer/CardContainer'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import { EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'

import { Product } from 'types/product'
import { ReactTable } from 'components/tables'

interface ComponentProps {
  productsArray: Product[]
  selectedProductsArray: Product[]
  setSelectedProduct: (p: Product) => void
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>, ri: any) => void
}

const ProviderItemsForm: React.FC<ComponentProps> = props => {
  const { productsArray, selectedProductsArray, setSelectedProduct, handlePriceChange } = props

  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }

  const handleSelectedProduct = (rowInfo: any) => {
    const product = { ...rowInfo.original, price: '' }

    setSelectedProduct(product)
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
      Header: 'Acciones',
      Cell: (rowInfo: any) => (
        <Button color='primary' width='100%' customHeight='32px' onClick={() => handleSelectedProduct(rowInfo)}>
          Seleccionar
        </Button>
      ),
      width: 135
    }
  ]

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
      width: 200
    }
  ]

  return (
    <FlexContainer marginTop='30px' justifyContent='space-between'>
      <FlexContainer flexDirection='column' width='48%'>
        <CardContainer header>
          Productos actualmente registrados
        </CardContainer>
        <CardContainer flexDirection='column'>
          <FlexContainer justifyContent='space-between' width='100%' marginBottom='1rem'>
            <Input
              value={filterValue}
              id='filter_value'
              placeholder='Filtrar por ID o nombre'
              width='73.5%'
              onChange={handleFilterChange}
            />
            <Button hollow color='primary' customHeight='2rem' svg={<RefreshSVG />}>Actualizar</Button>
          </FlexContainer>
          {
            productsArray.length === 0 ?
              <EmptyContainerMsg message='No se han encontrado productos.' />
              :
              <ReactTable data={productsArray} columns={leftTableColumns} />
          }
        </CardContainer>
      </FlexContainer>
      <FlexContainer flexDirection='column' width='48%'>
        <CardContainer header justifyContent='space-between'>
          Productos a proveer
        </CardContainer>
        <CardContainer>
          <ReactTable
            data={selectedProductsArray}
            columns={rightTableColumns}
            defaultPageSize={5}
            noDataText='Sin productos seleccionados'
          />
        </CardContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default ProviderItemsForm