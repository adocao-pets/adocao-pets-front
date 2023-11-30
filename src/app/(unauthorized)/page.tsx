import { Button } from '@/components/ui/button'
import { Card } from '@/components/Card'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="self-center ">
      <Card.Root title="Adote um Pet 🐶">
        <p className="text-lg text-gray-400">
          Plataforma de adoção de Pets. <br />
          Está procurando um pet? Tem algum pet para colocar para adoção?
          <br />
          Nossa plataforma foi desenvolvida para você!
        </p>
        <footer className="mt-5 flex flex-col gap-4">
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
          <Button variant="link">
            Não possui conta?&nbsp;
            <span className="text-blue-500">Clique aqui para se cadastrar</span>
          </Button>
        </footer>
      </Card.Root>
    </main>
  )
}
