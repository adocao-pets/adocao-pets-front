'use client'
import { Button } from '@/components/ui/button'
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
import { usePetsCreate } from '../hooks/usePetsCreate'
import { Pet, PetGender, PetSize, PetType } from '@/entities/pet'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'

// receber usuário por prop
export const CreatePetForm = () => {
  const { createPet } = usePetsCreate()
  const { handleSubmit, register, control } = useForm<Pet>()
  const router = useRouter()
  const handleCreate = async (data: Pet) => {
    createPet({
      ...data,
      age: Number(data.age),
      userId: 1,
    })
      .then(() => {
        router.push('/my-pets-adopt')
      })
      .catch(console.log)
  }

  return (
    <form
      className="relative flex w-full flex-1 flex-col gap-5 p-10 pb-0"
      onSubmit={handleSubmit(handleCreate)}
    >
      <div className="flex flex-1 flex-col  gap-5">
        <Input label="Nome" id="name" {...register('name')} />
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
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
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <SelectTrigger label="Gênero">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PetGender.MALE}>Macho</SelectItem>
                <SelectItem value={PetGender.FEMALE}>Fêmea</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Controller
          control={control}
          name="size"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <SelectTrigger label="Tamanho">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PetSize.SMALL}>Pequeno</SelectItem>
                <SelectItem value={PetSize.MEDIUM}>Médio</SelectItem>
                <SelectItem value={PetSize.LARGE}>Grande</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Input type="number" label="Idade" id="age" {...register('age')} />
        <Input label="Url da imagem" id="image" {...register('image')} />
        <Textarea
          label="Descrição"
          id="description"
          {...register('description')}
        />
      </div>
      <Footer>
        <Button type="submit">Cadastrar Pet</Button>
      </Footer>
    </form>
  )
}
