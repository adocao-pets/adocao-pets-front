'use client'
import api from '@/core/api/api'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export interface Login {
  email: string
  password: string
}

export const useAuth = (isAuthenticatedRoute: boolean) => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.replace('/login')
  }

  const handleLogin = async (data: Login) => {
    api
      .post('user/login', data)
      .then((response) => {
        const user = response.data
        localStorage.setItem('user', JSON.stringify(user))
        router.replace('/home')
      })
      .catch(console.error)
  }

  const handleRegister = async (data: Login) => {
    api
      .post('user/create', data)
      .then((response) => {
        const { user } = response.data
        localStorage.setItem('user', JSON.stringify(user))
        router.replace('/home')
      })
      .catch(console.error)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user && isAuthenticatedRoute) {
      router.replace('/login')
    }
    if (user && !isAuthenticatedRoute) {
      router.replace('/home')
    }
  }, [router, isAuthenticatedRoute])

  return { handleLogout, handleLogin, handleRegister }
}
