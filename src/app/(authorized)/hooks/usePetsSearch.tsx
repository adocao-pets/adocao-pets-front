import api from '@/core/api/api'
import { Pet } from '@/entities/pet'
import { useEffect, useState } from 'react'

interface GetPetsResponse {
  data: Pet[]
}

export interface PetsFilters {
  name?: string
  race?: string
  gender?: string
  size?: string
  type?: string
}

export const usePetsSearch = () => {
  const [pets, setPets] = useState<Pet[]>([])

  const fetchPets = async (filter?: PetsFilters) => {
    const response = await api.get<GetPetsResponse>('/user/pet', {
      params: filter,
    })
    setPets(response.data.data)
  }

  useEffect(() => {
    fetchPets().catch(console.log)
  }, [])

  return { fetchPets, pets }
}
