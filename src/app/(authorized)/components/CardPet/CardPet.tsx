import React from 'react';

interface CardPetProps {
  name: string;
  imageUrl: string;
}

export const CardPet: React.FC<CardPetProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center h-56 w-56 px-4 pt-5 pb-0 bg-white border border-solid border-gray-100 rounded-2xl shadow-card">
      <h2 className="text-base font-sans text-center text-gray-800 font-semibold">{name}</h2>
      <img src={imageUrl} alt={name} className="w-36 h-36 rounded-md bottom-0" />
    </div>
  );
};