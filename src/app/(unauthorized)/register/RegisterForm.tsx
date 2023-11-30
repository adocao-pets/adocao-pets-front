'use client'

import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Login, useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import api from '@/core/api/api'

interface Register {
  name: string
  email: string
  password: string
}

export const RegisterForm = () => {
  const { handleSubmit, register } = useForm<Register>()
  const { handleRegister } = useAuth(false)

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Input label="Nome" id="name" {...register('name')} />
      <Input label="Email" id="email" {...register('email')} />
      <Input
        label="Senha"
        id="password"
        type="password"
        {...register('password')}
      />
      <footer className="mt-5 flex flex-col gap-4 text-center">
        <Button type="submit">Criar Conta</Button>
        <Link href="/login">
          <Button variant="link">
            Já possui uma conta?&nbsp;
            <span className="text-blue-500">Clique aqui para fazer login</span>
          </Button>
        </Link>
      </footer>
    </form>
  )
}
