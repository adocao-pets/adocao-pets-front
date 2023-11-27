import { Header } from '@/components/Header'
import { CreatePetForm } from './CreatePetForm'

export default function PetCreatePage() {
  return (
    <>
      <Header title="Cadastrar Pet" />
      <CreatePetForm />
    </>
  )
}
