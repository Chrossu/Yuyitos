import React from 'react'
import Table from 'react-table'
import 'react-table/react-table.css'

import { } from './'

interface ComponentProps {
  data: any[]
  columns: any
  filterable?: boolean
  defaultPageSize?: number
  isLoading?: boolean
}

const ReactTable: React.FC<ComponentProps> = ({ data, columns, filterable, defaultPageSize, isLoading }) => {
  return (
    <Table
      filterable={filterable}
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize ? defaultPageSize : data.length > 8 ? 8 : data.length + 1}
      showPageSizeOptions={false}
      pageText='Página'
      nextText='Siguiente'
      previousText='Atrás'
      loadingText='Cargando...'
      ofText='de '
      rowsText='filas'
    />
  )
}

export default ReactTable