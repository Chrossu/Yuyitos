import React from 'react'

import { CardContainer } from 'components/cards'
import { ReactTable } from 'components/tables'

import { Product } from 'types/product'

interface ComponentProps {
  selectedProductsArray: Product[]
  columns: any[]
  headerTitle?: string
}

const SelectedOwnProductsTable: React.FC<ComponentProps> = ({ selectedProductsArray, columns, headerTitle }) => (
  <>
    {
      headerTitle && (
        <CardContainer header justifyContent='space-between'>
          {headerTitle}
        </CardContainer>
      )
    }
    <CardContainer>
      <ReactTable
        data={selectedProductsArray}
        columns={columns}
        defaultPageSize={7}
        noDataText='Sin productos seleccionados'
      />
    </CardContainer>
  </>
)

export default SelectedOwnProductsTable