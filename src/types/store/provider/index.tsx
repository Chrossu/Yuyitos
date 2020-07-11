export type ProviderFormState = {
  business_type: string
  address: string
  phone_number: string
}

export type Business = {
  businessID: number
  businessType: string
}

export type Provider = {
  id: number
  name: string
  representer: string
  rut: string
  email: string
  phone_number: string
  business_id: number
  business_type: string
  address: string
}