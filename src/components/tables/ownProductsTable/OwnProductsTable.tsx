import React from 'react'
import { ReactComponent as RefreshSVG } from 'layout/svg-repo/refresh.svg'

import { CardContainer, FlexContainer, EmptyContainerMsg } from 'components/cards'
import { Input } from 'components/inputs'
import { ReactTable } from 'components/tables'
import { Button } from 'components/buttons'

import { Product } from 'types/store/product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'store/actions/products.actions'
import { createLoadingSelector } from 'utils/generalFunctions'
import { FETCH_PRODUCTS } from 'utils/generalConstants'
import { AppState } from 'store/configureStore'
import { Spinner } from 'components/utilities-components'

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
  const dispatch = useDispatch()
  const [filterValue, setFilterValue] = React.useState<string>('')
  // Items on left table that are filtered depending on user actions
  const [filteredProductsArray, setFilteredProductsArray] = React.useState<Product[]>([])

  const loadingSelector = createLoadingSelector([FETCH_PRODUCTS])
  const isFetchingProducts = useSelector((state: AppState) => loadingSelector(state))

  React.useEffect(() => {
    if (!!filterValue)
      setFilteredProductsArray(productsArray.filter(product => {
        const regex = new RegExp(`${filterValue}`, 'gi')
        return product.name.match(regex) || product.id.toString().match(regex)
      }))
  }, [filterValue])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value)
  }

  const handleSelectedProduct = (rowInfo: any) => {
    const product = { ...rowInfo.original, price: '' }

    onSelectProduct(product)
  }

  const handleRefresh = () => dispatch(fetchProducts())

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
      width: 50,
      style: { textAlign: 'center', margin: 'auto' }
    },
    {
      Header: 'Nombre',
      accessor: 'name',
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
          {
            isFetchingProducts ? <Spinner /> :
              <Button hollow color='primary' customHeight='2rem' svg={<RefreshSVG />} onClick={handleRefresh}>
                Actualizar
              </Button>
          }
        </FlexContainer>
        {
          productsArray.length === 0 ?
            <EmptyContainerMsg message='No se han encontrado productos.' />
            :
            <ReactTable
              data={!!filteredProductsArray.length ? filteredProductsArray : productsArray}
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