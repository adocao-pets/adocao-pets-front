import React, { useState } from 'react';
import { variants } from './CardPet.styles'

interface CardPetProps {
  name: string;
  imageUrl: string;
}

export const CardPet: React.FC<CardPetProps> = ({ name, imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };
  
  return (
    <div className={variants({ selected: isSelected })} onClick={handleCardClick}>
      <h2 className="text-base font-sans text-center text-gray-800 font-semibold">{name}</h2>
      <img src={imageUrl} alt={name} className="w-36 h-36 rounded-md bottom-0" />
    </div>
  );
};