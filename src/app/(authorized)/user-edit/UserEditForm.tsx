'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
interface UserFields {
  name: string
  lastName: string
  email: string
  documentNumber: string
  zipCode: string
  address: string
}
// receber usuário por prop
export const UserEditForm = () => {
  const { handleSubmit, register } = useForm<UserFields>()

  const handleEdit = (data: UserFields) => {
    // TODO: Realizar conexão com a API

    console.log(data)
  }

  return (
    <form
      className="relative flex w-full flex-1 flex-col gap-5 p-10 pb-0"
      onSubmit={handleSubmit(handleEdit)}
    >
      <div className="flex flex-1 flex-col  gap-5">
        <Input label="Nome" id="name" {...register('name')} />
        <Input label="Sobrenome" id="lastName" {...register('lastName')} />
        <Input
          label="CPF"
          id="documentNumber"
          disabled
          {...register('documentNumber')}
        />
        <Input label="CEP" id="zipCode" {...register('zipCode')} />
        <Input
          label="Endereço completo"
          id="address"
          {...register('address')}
        />
        <Input label="Email" id="email" disabled {...register('email')} />
      </div>
      <footer className="shadow-all bottom-5 flex justify-end rounded-lg px-6 py-4">
        <Button full={false} type="submit">
          Confirmar Edição
        </Button>
      </footer>
    </form>
  )
}
