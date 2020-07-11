export type ClientForm = {
  id?: number
  name: string
  paternal_surname: string
  maternal_surname: string
  email: string
  phone: string
}

export type Client = ClientForm & {
  id: number
  username: string
  user_kind: number
}
