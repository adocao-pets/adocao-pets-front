"use client"
import axios from "axios";
import { SearchFilter } from "../components/SearchFilter";
import { useEffect, useState } from "react";
import { CardPet } from "../components/CardPet";

interface Pet {
  id: number;
  image: string;
  name: string;
  age: number;
  type: string;
  race: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export default function SearchPage() {
  const [petList, setPetList] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://adocao-de-pets-app-back.onrender.com/api/v1/user/pet/all');
        setPetList(response.data); 
      } catch (error) {
        console.error('Erro ao buscar a lista de pets:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-catamaran font-semibold text-center text-gray-800">Procurar Pets</h1>
      <SearchFilter></SearchFilter>
      <div className="flex">
        {petList.map((pet) => (
          <CardPet name={pet.name} imageUrl={pet.image}></CardPet>
        ))}
      </div>
    </div>   
  );
}
