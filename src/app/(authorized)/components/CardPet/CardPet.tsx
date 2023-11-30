/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface CardPetProps {
  name: string
  imageUrl: string
}

export const CardPet: React.FC<CardPetProps> = ({ name, imageUrl }) => {
  return (
    <div className="shadow-card -solid flex h-56 w-56 cursor-pointer flex-col items-center gap-4 overflow-hidden  rounded-2xl border border-gray-100 bg-white px-4 pb-0 pt-5 hover:bg-blue-500/10 active:border-blue-500">
      <h2 className="text-center font-sans text-base font-semibold text-gray-800">
        {name}
      </h2>
      <img src={imageUrl} alt={name} className="bottom-0 w-36 rounded-md" />
    </div>
  )
}
