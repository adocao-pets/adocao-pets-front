import { User } from './user'

export enum PetType {
  CAT = 'GATO',
  DOG = 'CACHORRO',
}

export enum PetSize {
  SMALL = 'PEQUENO',
  MEDIUM = 'MEDIO',
  LARGE = 'GRANDE',
}

export enum PetGender {
  MALE = 'MACHO',
  FEMALE = 'FEMEA',
}

export interface Pet {
  id: number
  name: string
  image?: string
  gender?: PetGender
  size?: PetSize
  age?: number
  type?: PetType
  race?: string
  description?: string

  fosterCare?: User
}
