'use client'

import { Header } from '@/components/Header'
import { CardPet } from '../components/CardPet'

import React from 'react'
import { usePetsSearch } from '../hooks/usePetsSearch'
import { PetsDetailsSheet } from '../components/PetsDetailsSheet/PetsDetailsSheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MyPetsAdoptPage() {
  const { pets } = usePetsSearch()

  return (
    <>
      <Header title="Pets para adoção" />
      <main className="flex flex-1 flex-col px-8">
        <div className="mt-10 grid flex-1 grid-cols-4 gap-5">
          {pets.map((pet) => (
            <PetsDetailsSheet
              key={pet.id}
              title="Detalhes do pet"
              pet={pet}
              footer={
                <div className="flex w-full gap-2">
                  <Button size="full" variant="destructive">
                    Excluir Pet
                  </Button>
                  <Link href={`/my-pets-adopt/${pet.id}`}>
                    <Button size="full" variant="outline">
                      Editar Pet
                    </Button>
                  </Link>
                </div>
              }
            >
              {pet.image ? (
                <CardPet key={pet.id} imageUrl={pet.image} name={pet.name} />
              ) : (
                <span>{pet.name}</span>
              )}
            </PetsDetailsSheet>
          ))}
        </div>
      </main>
    </>
  )
}
