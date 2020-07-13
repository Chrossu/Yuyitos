import React from 'react'
import { CardContainer } from 'components/cards'
import { Checkbox } from 'components/inputs'
import { AppState } from 'store/configureStore'
import { useSelector, useDispatch } from 'react-redux'
import { ReactTable } from 'components/tables'
import { updateClientStatus } from 'store/actions/clients.actions'
import { Spinner } from 'components/utilities-components'

type ComponentProps = {

}

const ClientsManagement: React.FC<ComponentProps> = props => {
  const clients = useSelector((state: AppState) => state.clients)
  const dispatch = useDispatch()

  const [fetchingID, setFetchingID] = React.useState<number | null>(null)

  const onToggleClient = async (rowInfo: any) => {
    const { id, status_id } = rowInfo.original
    const newStatus = status_id === 1 ? 2 : 1

    setFetchingID(id)
    dispatch(updateClientStatus(id, newStatus, setFetchingID))
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
      style: { textAlign: 'center' },
      width: 80,
      maxWidth: '10'
    },
    {
      Header: 'RUT',
      accessor: 'rut',
      Cell: (rowInfo: any) => rowInfo.original.rut,
      style: { textAlign: 'left' },
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      Cell: (rowInfo: any) => `${rowInfo.original.name} ${rowInfo.original.paternal_surname}`,
      style: { textAlign: 'left' },
    },
    {
      Header: 'Deuda',
      accessor: 'debt',
      Cell: (rowInfo: any) => `$${Number(rowInfo.original.debt || 0)}`,
      style: { margin: 'auto' },
      width: 150
    },
    {
      Header: 'Correo',
      accessor: 'email',
      style: { margin: 'auto' },
      width: 300
    },
    {
      Header: '¿Habilitado para fiar?',
      id: 'permission',
      Cell: (rowInfo: any) => fetchingID === rowInfo.original.id ? <Spinner /> : (
        <Checkbox isChecked={rowInfo.original.status_id === 1} onClick={() => onToggleClient(rowInfo)} />
      ),
      style: { margin: 'auto' },
      width: 200
    }
  ]

  return (
    <>
      <CardContainer header>
        Panel de administración de clientes
      </CardContainer>
      <CardContainer flexDirection='column'>
        <ReactTable
          data={clients}
          columns={columns}
        />
      </CardContainer>
    </>
  )
}

export default ClientsManagement