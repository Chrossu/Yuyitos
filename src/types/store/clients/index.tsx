export type ClientForm = {
  name: string
  paternalLastName: string
  maternalLastName: string
  email: string
  phone: string
}

export type Client = ClientForm & {
  id: string
  username: string
  user_kind: number
}
