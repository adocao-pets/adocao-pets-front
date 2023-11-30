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
import { PetType } from '../pet-create/CreatePetForm'

export const FilterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="icon" size="icon">
          <ListFilter className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtrar por</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-1 flex-col gap-10">
          <Select>
            <SelectTrigger label="Filtrar por raça">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PetType.CAT}>Gato</SelectItem>
              <SelectItem value={PetType.DOG}>Cachorro</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger label="Filtrar por gênero">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Macho</SelectItem>
              <SelectItem value="female">Fêmea</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger label="Filtrar por porte do animal">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Pequeno</SelectItem>
              <SelectItem value="medium">Médio</SelectItem>
              <SelectItem value="big">Grande</SelectItem>
            </SelectContent>
          </Select>
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
      </SheetContent>
    </Sheet>
  )
}
