'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiLogOut } from 'react-icons/fi'

export const User = () => {
  const { push } = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    push('/login')
  }
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-500 p-3 text-white">
      <Link href="/user-edit" passHref className="flex-1">
        <div className="flex flex-col">
          <span className="text-sm">Olá</span>
          <span className="text-lg font-semibold">Usuário</span>
        </div>
      </Link>
      <button onClick={() => handleLogout()}>
        <FiLogOut size={15} />
      </button>
    </div>
  )
}
