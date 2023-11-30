'use client'
import { Header } from '@/components/Header'
import { Input } from '@/components/ui/input'
import { CardPet } from '../components/CardPet'
import { Footer } from '../components/Footer'

import { FilterSheet } from './FilterSheet'
import React from 'react'
import { Pet } from '@/entities/pet'
import { PetsFilters, usePetsSearch } from '../hooks/usePetsSearch'
import { debounce } from '@/utils/debounce'
import { PetsDetailsSheet } from '../components/PetsDetailsSheet/PetsDetailsSheet'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import api from '@/core/api/api'

export default function SearchPage() {
  const { pets, fetchPets } = usePetsSearch()
  const [search, setSearch] = React.useState({} as PetsFilters)

  const [selectedPet, setSelectePet] = React.useState<Pet | null>(null)

  const handleSelectDog = (pet: Pet) => {
    setSelectePet(pet.id === selectedPet?.id ? null : pet)
  }

  const handleConfirmAdopt = async () => {
    await api.delete(`/user/pet/delete/${selectedPet?.id}`)
    await fetchPets(search)
  }

  const handleFilter = async (data: PetsFilters) => {
    const newSearch = { ...search, ...data }
    setSearch(newSearch)
    await fetchPets(newSearch)
  }

  const debouncedInputRequest = React.useCallback(
    debounce((name: string) => {
      const newSearch = { ...search, name }
      setSearch(newSearch)
      fetchPets(newSearch)
    }, 500),
    [search, setSearch, fetchPets],
  )

  return (
    <>
      <Header title="Procurar Pets">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">
            Realize a procura ou filtre ao lado
          </h3>
          <div className="flex">
            <FilterSheet onPetsFilter={handleFilter} />

            <Input
              onChange={(e) => debouncedInputRequest(e.target.value)}
              size={50}
              label="Procurar por nome"
            />
          </div>
        </div>
      </Header>
      <main className="flex flex-1 flex-col px-8">
        <div className="mt-10 grid flex-1 grid-cols-4 gap-5">
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
        <Footer>
          <PetsDetailsSheet
            title="Confirmar adoção?"
            pet={selectedPet}
            footer={
              <SheetClose>
                <Button
                  onClick={handleConfirmAdopt}
                  size="lg"
                  variant="default"
                >
                  Confirmar adoção
                </Button>
              </SheetClose>
            }
          >
            <Button size="lg" variant="default">
              Adotar Pet
            </Button>
          </PetsDetailsSheet>
        </Footer>
      </main>
    </>
  )
}
