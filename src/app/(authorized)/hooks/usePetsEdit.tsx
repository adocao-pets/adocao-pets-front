import api from '@/core/api/api'
import { PetGender, PetSize, PetType } from '@/entities/pet'
import { useEffect, useState } from 'react'

export interface EditPetsRequest {
  userId: number
  name: string
  race?: string
  gender?: PetGender
  size?: PetSize
  type?: PetType

  image?: string
  age?: number
  description?: string

  id?: number
}

export const usePetsEdit = (petId: number) => {
  const [pet, setPet] = useState<EditPetsRequest | undefined>(undefined)
  const editPet = async (pet: EditPetsRequest) => {
    api
      .patch<EditPetsRequest>(`/user/pet/update/${petId}`, pet)
      .then((response) => {
        return response.data
      })
  }

  useEffect(() => {
    api
      .get<EditPetsRequest>(`/user/pet/${petId}`)
      .then((response) => {
        setPet({
          ...response.data,
          type: 'CACHORRO' as PetType,
        })
      })
      .catch(console.error)
  }, [petId])

  return { editPet, pet }
}
