export type User = {
  id: string
  name: string
  paternal_last_name: string
  maternal_last_name: string
  email: string
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