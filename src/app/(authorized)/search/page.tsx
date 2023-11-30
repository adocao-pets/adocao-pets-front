import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ListFilter } from 'lucide-react'
import { CardPet } from '../components/CardPet'
import { Footer } from '../components/Footer'

export default function SearchPage() {
  return (
    <>
      <Header title="Procurar Pets">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">
            Realize a procura ou filtre ao lado
          </h3>
          <div className="flex">
            <Button variant="icon" size="icon">
              <ListFilter className="h-4 w-4" />
            </Button>
            <Input size={50} label="Procurar por nome" />
          </div>
        </div>
      </Header>
      <main className="px-8">
        <div>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Nala"
              imageUrl="https://static.vecteezy.com/system/resources/thumbnails/016/761/881/small/the-dog-smiles-because-he-is-happy-png.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_1280.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
            <CardPet
              name="Tom"
              imageUrl="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
            />
          </div>
        </div>
        <Footer>
          <Button size="lg" variant="default">
            Adotar Pet
          </Button>
        </Footer>
      </main>
    </>
  )
}
