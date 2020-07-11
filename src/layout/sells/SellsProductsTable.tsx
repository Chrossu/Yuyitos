import * as React from 'react'

import { } from './'

import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'
import { FlexContainer, EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'
import { ReactTable } from 'components/tables'

import { Product } from 'types/store/product'
import { useSelector } from 'react-redux'

interface ComponentProps {

}

const SellsProductsTable: React.FC<ComponentProps> = props => {
  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }
  
  const productsData = useSelector((state: any) => state.products.products)
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
        <Button color='primary' width='90%' fontSize='0.87rem' margin='auto' customHeight='32px'>
          Seleccionar
        </Button>
      ),
      width: 135
    }
  ]

  return (
    <>
      <FlexContainer justifyContent='space-between' width='100%' marginBottom='1rem'>
        <Input
          value={''}
          id='filter_value'
          placeholder='Filtrar por ID o nombre'
          width='73.5%'
          onChange={handleFilterChange}
        />
        <Button hollow color='primary' customHeight='2rem' svg={<RefreshSVG />}>Actualizar</Button>
      </FlexContainer>
      {
        productsData.length === 0 ?
          <EmptyContainerMsg message='No se han encontrado productos.' />
          :
          <ReactTable
            data={productsData}
            columns={leftTableColumns}
            defaultPageSize={7}
          />
      }
    </>
  )
}

export default SellsProductsTable