import React from 'react'
import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'

import { CardContainer, FlexContainer, EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { ReactTable } from 'components/tables'
import { Button } from 'components/buttons'

import { Product } from 'types/product'

interface ComponentProps {
  productsArray: Product[]
  onSelectProduct: any
  headerTitle?: string
  customColumns?: any[]
  customWidth?: string
  onRowClick?: any
  padding?: string
}

const OwnProductsTable: React.FC<ComponentProps> = ({ productsArray, onSelectProduct, headerTitle, customColumns, onRowClick, padding }) => {
  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }

  const handleSelectedProduct = (rowInfo: any) => {
    const product = { ...rowInfo.original, price: '' }

    onSelectProduct(product)
  }

  const columns = [
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
        <Button color='primary' width='90%' fontSize='0.87rem' margin='auto' customHeight='32px' onClick={() => handleSelectedProduct(rowInfo)}>
          Seleccionar
        </Button>
      ),
      width: 135
    }
  ]

  return (
    <FlexContainer flexDirection='column' width='100%'>
      {
        headerTitle && (
          <CardContainer header>
            {headerTitle}
          </CardContainer>
        )
      }
      <CardContainer flexDirection='column' padding={padding}>
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
            <ReactTable
              data={productsArray}
              columns={customColumns ? customColumns : columns}
              defaultPageSize={7}
              onRowClick={onRowClick}
            />
        }
      </CardContainer>
    </FlexContainer>
  )
}

export default OwnProductsTable