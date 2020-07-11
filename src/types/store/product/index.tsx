export type ProductFormState = {
  id: number
  name: string
  sell_price: string
  critical_stock: string
  stock: string
  status_id: ProductType
  brand_id: Brand
  product_family_id: number
  buy_price?: string
}

export type ProductType = {
  id: number
  name: string
}

export type Brand = {
  id: number
  name: string
}

export type ProductReducer = {
  products: ProductFormState[]
  productTypes: ProductType[]
  productBrands: Brand[]
}

export type Product = ProductFormState & {
  id: number
  stockQuantity: string
  stockToSell?: string
}