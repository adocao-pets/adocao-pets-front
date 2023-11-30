'use client'

import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Login, useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<Login>()
  const { handleLogin } = useAuth(false)

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
      <Input label="Email" id="email" {...register('email')} />
      <Input
        label="Senha"
        id="password"
        type="password"
        {...register('password')}
      />
      <footer className="mt-5 flex flex-col gap-4 text-center">
        <Button type="submit">Realizar Login</Button>
        <Link href="/register">
          <Button variant="link">
            Não possui conta?&nbsp;
            <span className="text-blue-500">Clique aqui para se cadastrar</span>
          </Button>
        </Link>
      </footer>
    </form>
  )
}
