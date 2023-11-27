import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

export const SearchFilter: React.FC = () => {
  return (
    <div className="flex items-center w-[995px] h-[54px] p-1 gap-6 mt-16 mb-10">
      <span className="text-lg font-semibold w-[448px] h-[21px]">Realize a procura ou filtro ao lado</span>
      <IoFilterSharp size={24}/>
      <div className="flex items-center border border-solid border-gray-200 rounded-lg">
      <IoIosSearch size={20} />
        <input
          type="text"
          placeholder="Procurar por nome"
          className="outline-none px-2 w-[480px] h-[54px]"
        />       
      </div>
    </div>
  );
};