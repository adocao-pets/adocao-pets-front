'use client'

import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'

export const User = () => {
  const { handleLogout } = useAuth(true)
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-500 p-3 text-white">
      <Link href="/user-edit" passHref className="flex-1">
        <div className="flex flex-col">
          <span className="text-sm">Olá</span>
          <span className="text-lg font-semibold">Usuário</span>
        </div>
      </Link>
      <button onClick={handleLogout}>
        <FiLogOut size={15} />
      </button>
    </div>
  )
}
