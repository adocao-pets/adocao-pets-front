'use client'

import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

interface LoginFields {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<LoginFields>()
  const { replace } = useRouter()

  const handleLogin = async (data: LoginFields) => {
    // TODO: Realizar conexão com a API
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const user = await response.json()
        localStorage.setItem('user', JSON.stringify(user))

        replace('/home')
      }
    } catch (error) {
      console.log(error)
    }
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
        <Button variant="link">
          Não possui conta?&nbsp;
          <span className="text-blue-500">Clique aqui para se cadastrar</span>
        </Button>
      </footer>
    </form>
  )
}
