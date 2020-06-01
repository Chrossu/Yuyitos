export type ProviderFormState = {
  providerName: string
  businessType: string
  address: string
  phoneNumber: string
}

type Business = {
  businessID: string
  businessType: string
}

export type Provider = {
  id: string
  rut: string
  providerName: string
  business: Business
  address: string
  phoneNumber: string
}