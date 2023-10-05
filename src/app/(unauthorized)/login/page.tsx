import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { FiUser } from 'react-icons/fi'
export default function LoginPage() {
  return (
    <main className="self-center">
      <Card.Root title="Login" bulletIcon={<FiUser />}>
        <Input label="Email" id="email" />
        <Input label="Senha" id="password" type="password" />
        <footer className="mt-5 flex flex-col gap-4">
          <Button>Realizar Login</Button>
          <Button variant="plainGrey">
            Não possui conta?&nbsp;
            <span className="text-blue-500">Clique aqui para se cadastrar</span>
          </Button>
        </footer>
      </Card.Root>
    </main>
  )
}
