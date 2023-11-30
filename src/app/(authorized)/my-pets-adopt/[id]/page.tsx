import { Header } from '@/components/Header'
import { EditPetForm } from './EditPetForm'

export default function PetEditPage() {
  return (
    <>
      <Header title="Editar Pet" />
      <EditPetForm />
    </>
  )
}
