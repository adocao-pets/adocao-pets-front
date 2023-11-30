'use client'

import { Header } from '@/components/Header'
import { UserEditForm } from './UserEditForm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function UserEditPage() {
  const { replace } = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) replace('/login')
  }, [])

  return (
    <>
      <Header title="Editar usuário" />
      <UserEditForm />
    </>
  )
}
