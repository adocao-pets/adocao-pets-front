import api from '@/core/api/api'

export interface CreatePetsRequest {
  userId: number
  name: string
  race?: string
  gender?: string
  size?: string
  type?: string

  image?: string
  age?: number
  description?: string

  id?: number
}

export const usePetsCreate = () => {
  const createPet = async (pet: CreatePetsRequest) => {
    const response = await api.post<CreatePetsRequest>(
      '/user/pet/register',
      pet,
    )

    return response.data
  }

  return { createPet }
}
