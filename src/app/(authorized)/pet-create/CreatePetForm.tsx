'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Controller, useForm } from 'react-hook-form'
import { Footer } from '../components/Footer'

export enum PetType {
  CAT = 'GATO',
  DOG = 'CACHORRO',
}

interface Pet {
  image: string
  name: string
  age: string
  type: PetType
  race: string
  description: string
}
// receber usuário por prop
export const CreatePetForm = () => {
  const { handleSubmit, register, control } = useForm<Pet>()

  const handleEdit = (data: Pet) => {
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
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger label="Tipo">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PetType.CAT}>Gato</SelectItem>
                <SelectItem value={PetType.DOG}>Cachorro</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Input label="Raça" id="race" {...register('race')} />
        <Input label="Idade" id="age" {...register('age')} />
        <Input label="Url da imagem" id="image" {...register('image')} />
      </div>
      <Footer>
        <Button full={false} type="submit">
          Cadastrar Pet
        </Button>
      </Footer>
    </form>
  )
}
