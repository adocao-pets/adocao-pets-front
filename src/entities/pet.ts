import { User } from './user'

export interface Pet {
  id: string
  image: string
  name: string
  gender: string
  size: string
  age: number
  type: string
  race: string
  description: string

  fosterCare?: User
}
