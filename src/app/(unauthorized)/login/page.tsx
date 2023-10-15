import { Card } from '@/components/Card'

import { FiUser } from 'react-icons/fi'
import { LoginForm } from './LoginForm'
export default function LoginPage() {
  return (
    <main className="self-center">
      <Card.Root title="Login" bulletIcon={<FiUser />}>
        <LoginForm />
      </Card.Root>
    </main>
  )
}
