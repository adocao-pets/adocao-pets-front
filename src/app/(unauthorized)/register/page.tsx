import { Card } from '@/components/Card'

import { FiUser } from 'react-icons/fi'
import { RegisterForm } from './RegisterForm'
export default function RegisterPage() {
  return (
    <main className="self-center">
      <Card.Root title="Criar Conta" bulletIcon={<FiUser />}>
        <RegisterForm />
      </Card.Root>
    </main>
  )
}
