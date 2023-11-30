/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Pet } from '@/entities/pet'
import { PetDetail } from './PetDetailt'

interface ConfirmAdoptSheetProps {
  pet: Pet | null
}

export const ConfirmAdoptSheet = ({ pet }: ConfirmAdoptSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger disabled={!pet} asChild>
        <Button size="lg" variant="default">
          Adotar Pet
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Confirmar adoção?</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-6">
          <section className="flex items-center gap-5">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-100">
              <img src={pet?.image} alt={pet?.name} className="object-fill" />
            </div>
            <div className="flex flex-col gap-1 ">
              <span className="text-lg font-medium">{pet?.name}</span>
              <span className="text-sm text-slate-600">{pet?.type}</span>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Características
            </h2>
            <PetDetail title="Gênero">{pet?.gender}</PetDetail>
            <PetDetail title="Tamanho">{pet?.size}</PetDetail>
            {/* <PetDetail title="Peso">{pet?.}</PetDetail> */}
            <PetDetail title="Idade">{pet?.age}</PetDetail>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Cuidador
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-md font-medium">
                {pet?.fosterCare?.name}
              </span>
              <span className="text-sm text-slate-600">
                {pet?.fosterCare?.email}
              </span>
            </div>
          </section>
        </div>
        <SheetFooter>
          <Button size="lg" variant="default">
            Confirmar adoção
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
