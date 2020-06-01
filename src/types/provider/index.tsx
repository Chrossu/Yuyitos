export type ProviderFormState = {
  providerName: string
  business: string
  address: string
  phoneNumber: string
}

export type Provider = ProviderFormState & {
  id: string
}