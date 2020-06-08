import * as React from 'react'

import { } from './'

import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'
import { FlexContainer, EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'
import { ReactTable } from 'components/tables'

import { Product } from 'types/store/product'

interface ComponentProps {

}

const SellsProductsTable: React.FC<ComponentProps> = props => {
  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }
  
  const productsArray: Product[] = [
    {
      id: '1',
      productName: 'Pan',
      stockQuantity: '20',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '2',
      productName: 'Leche Nestlé',
      stockQuantity: '38',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '3',
      productName: 'Mantequilla Colún 200g',
      stockQuantity: '9',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '4',
      productName: 'Bebida desechable 1.5 lts. Sprite',
      stockQuantity: '12',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '5',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '6',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '7',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '8',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '9',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
    {
      id: '10',
      productName: 'Saco de papas 1kg',
      stockQuantity: '18',
      productBuyPrice: '',
      productSellPrice: '900',
      productType: {
        id: '1',
        productTypeName: 'Abarrote'
      },
      brand: {
        id: '0',
        brandName: ''
      }
    },
  ]
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
        productsArray.length === 0 ?
          <EmptyContainerMsg message='No se han encontrado productos.' />
          :
          <ReactTable
            data={productsArray}
            columns={leftTableColumns}
            defaultPageSize={7}
          />
      }
    </>
  )
}

export default SellsProductsTable