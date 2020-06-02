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
  user_kind: UserKind
}

type UserKind = {
  id?: string
  kind?: UserKindTypes
}

type UserKindTypes = | 'admin' | 'user'

export type LoginUser = {
  username: string
  password: string
}