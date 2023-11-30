'use client'
import { Header } from '@/components/Header'
import { Input } from '@/components/ui/input'
import { CardPet } from '../components/CardPet'
import { Footer } from '../components/Footer'

import { FilterSheet } from './FilterSheet'
import { ConfirmAdoptSheet } from './ConfirmAdoptSheet'
import React from 'react'
import { Pet } from '@/entities/pet'
import { v4 } from 'uuid'

const pets: Pet[] = [
  {
    id: v4(),
    age: 1,
    description: 'any',
    gender: 'Macho',
    image: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png',
    name: 'Tom',
    race: 'Golden',
    size: 'Médio',
    type: 'Cachorro',
    fosterCare: {
      id: 'any',
      name: 'João',
      email: 'joao@mail.com',
    },
  },
]

export default function SearchPage() {
  const [selectedPet, setSelectePet] = React.useState<Pet | null>(null)

  const handleSelectDog = (pet: Pet) => {
    setSelectePet(pet.id === selectedPet?.id ? null : pet)
  }

  return (
    <>
      <Header title="Procurar Pets">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">
            Realize a procura ou filtre ao lado
          </h3>
          <div className="flex">
            <FilterSheet />

            <Input size={50} label="Procurar por nome" />
          </div>
        </div>
      </Header>
      <main className="px-8">
        <div>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {pets.map((pet) => (
              <CardPet
                key={pet.id}
                imageUrl={pet.image}
                name={pet.name}
                onClick={() => handleSelectDog(pet)}
                selected={selectedPet?.id === pet.id}
              />
            ))}
          </div>
        </div>
        <Footer>
          <ConfirmAdoptSheet pet={selectedPet} />
        </Footer>
      </main>
    </>
  )
}
