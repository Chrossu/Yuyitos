import React from 'react'
import { CardContainer, FlexContainer } from 'components/cards'
import { SelectInput, Input, Checkbox } from 'components/inputs'
import { SelectOption } from 'types/generals'
import { AppState } from 'store/configureStore'
import { useSelector } from 'react-redux'
import { ReactTable } from 'components/tables'

type ComponentProps = {

}

const ClientsManagement: React.FC<ComponentProps> = props => {
  const clients = useSelector((state: AppState) => state.clients)

  const onToggleClient = (selectedOption: any) => {

  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
      style: { margin: 'auto' },
      width: 80,
      maxWidth: '10'
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      Cell: (rowInfo: any) => `${rowInfo.original.name} ${rowInfo.original.paternalLastName}`,
      style: { textAlign: 'left' },
      width: 250
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
      Cell: (rowInfo: any) => (
        <Checkbox isChecked={true} onClick={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
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