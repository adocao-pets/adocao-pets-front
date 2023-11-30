'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ListFilter } from 'lucide-react'
import { PetsFilters } from '../hooks/usePetsSearch'
import { Controller, useForm } from 'react-hook-form'
import { Pet, PetGender, PetSize, PetType } from '@/entities/pet'
import { useState } from 'react'

interface FilterSheetProps {
  onPetsFilter: (filter: PetsFilters) => Promise<void>
}

export const FilterSheet = ({ onPetsFilter }: FilterSheetProps) => {
  const { handleSubmit, control } = useForm<Pet>()
  const [sheetOpen, setSheetOpen] = useState(false)
  const handleFilter = async (data: Pet) => {
    await onPetsFilter(data)
    setSheetOpen(false)
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={(isOpen) => setSheetOpen(isOpen)}>
      <SheetTrigger asChild>
        <Button variant="icon" size="icon">
          <ListFilter className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtrar por</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(handleFilter)}>
          <div className="flex h-full flex-1 flex-col gap-10">
            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger label="Filtrar por Tipo">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PetType.CAT}>Gato</SelectItem>
                    <SelectItem value={PetType.DOG}>Cachorro</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger label="Filtrar por gênero">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PetGender.MALE}>Macho</SelectItem>
                    <SelectItem value={PetGender.FEMALE}>Fêmea</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="size"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger label="Filtrar por porte do animal">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PetSize.SMALL}>Pequeno</SelectItem>
                    <SelectItem value={PetSize.MEDIUM}>Médio</SelectItem>
                    <SelectItem value={PetSize.LARGE}>Grande</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <SheetFooter>
            <SheetClose>
              <Button variant="outline" size="lg">
                Cancelar
              </Button>
            </SheetClose>
            <Button variant="default" size="lg">
              Filtrar
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
