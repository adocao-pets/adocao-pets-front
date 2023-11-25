'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface LoginFields {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<LoginFields>()
  const { replace } = useRouter()

  const handleLogin = (data: LoginFields) => {
    // TODO: Realizar conexão com a API

    replace('/home')
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
      <Input label="Email" id="email" {...register('email')} />
      <Input
        label="Senha"
        id="password"
        type="password"
        {...register('password')}
      />
      <footer className="mt-5 flex flex-col gap-4">
        <Button type="submit">Realizar Login</Button>
        <Button variant="plainGrey">
          Não possui conta?&nbsp;
          <span className="text-blue-500">Clique aqui para se cadastrar</span>
        </Button>
      </footer>
    </form>
  )
}