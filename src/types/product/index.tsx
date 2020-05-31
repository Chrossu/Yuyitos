export type ProductFormState = {
  id: string
  productName: string
  stockQuantity: string
  productType: ProductType
  brand: BrandType
  productBuyPrice: string
  productSellPrice: string
  providerID?: string
}

export type ProductType = {
  idType: string
  productTypeName: string
}

export type BrandType = {
  idBrand: string
  brandName: string
  brandDescription?: string
}

export type Product = ProductFormState & {
  id: string
  stockQuantity: string
}