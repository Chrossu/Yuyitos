import React from 'react'

import { CardContainer } from 'components/cards'
import { ReactTable } from 'components/tables'

import { Product } from 'types/store/product'

interface ComponentProps {
  selectedProductsArray: Product[]
  columns: any[]
  headerTitle?: string
  padding?: string
}

const SelectedOwnProductsTable: React.FC<ComponentProps> = ({ selectedProductsArray, columns, headerTitle, padding }) => (
  <>
    {
      headerTitle && (
        <CardContainer header justifyContent='space-between' padding={padding}>
          {headerTitle}
        </CardContainer>
      )
    }
    <CardContainer padding={padding}>
      <ReactTable
        data={selectedProductsArray}
        columns={columns}
        defaultPageSize={7}
        noDataText='Sin productos'
      />
    </CardContainer>
  </>
)

export default SelectedOwnProductsTable