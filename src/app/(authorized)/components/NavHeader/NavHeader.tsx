import React from 'react';

interface NavHeaderProps {
  title: string;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ title }) => {
  return (
    <div className="w-full h-[100px] fixed top-0 bg-white border-b p-5 flex items-center justify-center rounded-md">
      <h1 className="text-2xl font-bold font-catamaran text-center text-gray-800">{title}</h1>
    </div>
  );
};