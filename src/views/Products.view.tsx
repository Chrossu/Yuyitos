import React from 'react'

import { AddProduct } from 'layout/products'


interface ComponentProps {

}

const ProductsView: React.FC<ComponentProps> = props => {
  return (
    <AddProduct />
  )
}

export default ProductsView