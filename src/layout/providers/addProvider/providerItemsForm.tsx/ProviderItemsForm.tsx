import * as React from 'react'
import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'

import CardContainer from 'components/cards/cardContainer/CardContainer'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'
import { EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { Button } from 'components/buttons'

import { Product } from 'types/product'

interface ComponentProps {
  productsArray: Product[]
}

const ProviderItemsForm: React.FC<ComponentProps> = ({ productsArray }) => {
  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }

  //   const columns = [{
  //     Header: 'RUT',
  //     accessor: 'id_number'
  //   }, {
  //     Header: 'Nombre',
  //     accessor: 'client_name'
  //   }, {
  //     Header: '¿Es PEP?',
  //     accessor: 'is_pep',
  //     Cell: (rowInfo: any) => {
  //       const is_pep = rowInfo.original.is_pep
  //       return is_pep ? 'Si' : 'No'
  //     },
  //     filterMethod: (filter: any, row: any) => {
  //       const isPepStr = row.is_pep ? 'Si' : 'No'
  //       return isPepStr.startsWith(filter.value)
  //     },
  //   }, {
  //     Header: 'Estado',
  //     accessor: 'state',
  //     Cell: (rowInfo: any) => {
  //       const state = rowInfo.original.state
  //       return state && kycStateOptions[state] ? kycStateOptions[state].desc : ''
  //     },
  //     filterMethod: (filter: any, row: any) => {
  //       const state = kycStateOptions[row.state].desc
  //       return state.startsWith(filter.value)
  //     },
  //   }
  // ]
  return (
    <FlexContainer marginTop='30px' justifyContent='space-between'>
      <FlexContainer flexDirection='column' width='48%'>
        <CardContainer header>
          Producto
        </CardContainer>
        <CardContainer flexDirection='column'>
          <FlexContainer justifyContent='space-between' width='100%' marginBottom='1rem'>
            <Input
              value={filterValue}
              id='filter_value'
              placeholder='Filtrar por ID o nombre'
              width='70%'
              onChange={handleFilterChange}
            />
            <Button color='secondary' customHeight='2rem' svg={<RefreshSVG />}>Actualizar</Button>
          </FlexContainer>
          <EmptyContainerMsg message='No se han encontrado productos.' />
        </CardContainer>
      </FlexContainer>
      <FlexContainer flexDirection='column' width='48%'>
        <CardContainer header justifyContent='space-between'>
          <p>Producto</p>
          <p>Precio</p>
        </CardContainer>
        <CardContainer>
          <EmptyContainerMsg />
        </CardContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default ProviderItemsForm