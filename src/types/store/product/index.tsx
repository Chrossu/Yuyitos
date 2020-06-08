export type ProductFormState = {
  id: string
  productName: string
  stockQuantity: string
  productType: ProductType
  brand: Brand
  productBuyPrice: string
  productSellPrice: string
  providerID?: string
}

export type ProductType = {
  id: string
  productTypeName: string
}

export type Brand = {
  id: string
  brandName: string
  brandDescription?: string
}

export type ProductReducer = {
  products: ProductFormState[]
  productTypes: ProductType[]
  productBrands: Brand[]
}

export type Product = ProductFormState & {
  id: string
  stockQuantity: string
  stockToSell?: string
}