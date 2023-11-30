'use client'
import { Header } from '@/components/Header'
import { CreatePetForm } from './CreatePetForm'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PetCreatePage() {
  const { replace } = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) replace('/login')
  }, [])
  return (
    <>
      <Header title="Cadastrar Pet" />
      <CreatePetForm />
    </>
  )
}
