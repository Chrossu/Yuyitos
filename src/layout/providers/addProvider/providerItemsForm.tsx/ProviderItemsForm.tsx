import * as React from 'react'

// import {} from './'

import CardContainer from 'components/cards/cardContainer/CardContainer'
import FlexContainer from 'components/cards/flexContainer/FlexContainer'

interface ComponentProps {

}

const ProviderItemsForm: React.FC<ComponentProps> = props => {
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
        <CardContainer>
          <h1>list</h1>
        </CardContainer>
      </FlexContainer>
      <FlexContainer flexDirection='column' width='48%'>
        <CardContainer header justifyContent='space-between'>
          <p>Producto</p>
          <p>Precio</p>
        </CardContainer>
        <CardContainer>
          <h1>list</h1>
        </CardContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default ProviderItemsForm