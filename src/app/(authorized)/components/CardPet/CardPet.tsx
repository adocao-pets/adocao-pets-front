/* eslint-disable @next/next/no-img-element */
import { Pet } from '@/entities/pet'
import React from 'react'
import { variants } from './CardPet.styles'
interface CardPetProps {
  name: string
  imageUrl: string
  onClick: () => void
  selected: boolean
  // details: PetDetails
}

export const CardPet: React.FC<CardPetProps> = ({
  name,
  onClick,
  imageUrl,
  selected,
}) => {
  return (
    <div onClick={onClick} className={variants({ selected })}>
      <h2 className="text-center font-sans text-base font-semibold text-gray-800">
        {name}
      </h2>
      <img src={imageUrl} alt={name} className="bottom-0 w-36 rounded-md" />
    </div>
  )
}
