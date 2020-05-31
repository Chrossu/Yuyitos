export type ProductFormState = {
  id: string
  productName: string
  stockQuantity: string
  price: string
}

export type Product = ProductFormState & {
  id: string
  stockQuantity: string
}