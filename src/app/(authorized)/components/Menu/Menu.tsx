'use client'

import React from 'react'
import Image from 'next/image'
import { NavLink } from '../NavLink'
import { FiPlusCircle } from 'react-icons/fi'
import Link from 'next/link'
import { User } from '../User'

export const Menu: React.FC = () => {
  return (
    <aside className="flex flex-col items-center gap-4 p-8">
      <Link href="home">
        <Image src="/logo-branco.png" width={93} height={73} alt="Paw buddy" />
      </Link>
      <main className=" flex h-full min-w-[200px] flex-col border-t-2 border-zinc-600 pt-6">
        <ul className="flex flex-1 flex-col gap-3">
          <NavLink href="/home" icon={FiPlusCircle}>
            Procurar Pets
          </NavLink>
        </ul>
        <ul className="flex  flex-col gap-3">
          <NavLink icon={FiPlusCircle} href="/my-pets-adopt">
            Pets para adoção
          </NavLink>
          <NavLink icon={FiPlusCircle} href="/pet-create">
            Cadastrar Pet
          </NavLink>
          <User />
        </ul>
      </main>
    </aside>
  )
}
