export type ProviderFormState = {
  providerName: string
  rut: string
  business: string
  address: string
  phoneNumber: string
}

export type Provider = ProviderFormState & {
  id: string
}