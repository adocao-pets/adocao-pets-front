import api from '@/core/api/api'

export interface UpdateUserRequest {
  id: number
  name?: string
  email?: string
  password?: string
}

export const useUserUpdate = () => {
  const updateUser = async (user: UpdateUserRequest) => {
    const response = await api.patch<Omit<UpdateUserRequest, 'id'>>(
      '/user/update/1',
      {
        name: user.name,
        email: user.email,
      },
    )
    return response.data
  }

  return { updateUser }
}
