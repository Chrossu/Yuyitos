export type Product = {
  id: number
  name: string
  sell_price: string
  critical_stock: string
  stock: string
  status_id: number
  brand_id: number
  product_family_id: number
  buy_value?: string
  stock_to_sell?: string
  original_id?: number
}

export type ProductType = {
  id: number
  name: string
}

export type ProductFamilies = {
  id: number
  type_id: number
  name: string
}

export type Brand = {
  id: number
  name: string
}

export type ProductReducer = {
  products: Product[]
  productTypes: ProductType[]
  productFamilies: ProductFamilies[]
  productBrands: Brand[]
}
