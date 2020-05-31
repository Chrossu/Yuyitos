export type ProductFormState = {
  id: string
  productName: string
  stockQuantity: string
  price: string
  productType: ProductType
  brand: BrandType
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