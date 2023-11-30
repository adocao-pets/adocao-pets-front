'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useUserUpdate } from '../hooks/useUserUpdate'
import { useRouter } from 'next/navigation'
interface UserFields {
  name: string
  password: string
  email: string
}
// receber usuário por prop
export const UserEditForm = () => {
  const { handleSubmit, register } = useForm<UserFields>()
  const { updateUser } = useUserUpdate()
  const router = useRouter()

  const handleEdit = (data: UserFields) => {
    updateUser({
      email: data.email,
      name: data.name,
      password: data.password,
      id: 1,
    })
      .then(() => {
        router.push('/home')
      })
      .catch(console.log)
  }

  return (
    <form
      className="relative flex w-full flex-1 flex-col gap-5 p-10 pb-0"
      onSubmit={handleSubmit(handleEdit)}
    >
      <div className="flex flex-1 flex-col  gap-5">
        <Input label="Nome" id="name" {...register('name')} />
        <Input label="Email" id="email" {...register('email')} />
        <Input label="Senha" id="password" {...register('password')} />
      </div>
      <footer className="bottom-5 flex justify-end rounded-lg px-6 py-4 shadow-all">
        <Button type="submit">Confirmar Edição</Button>
      </footer>
    </form>
  )
}
