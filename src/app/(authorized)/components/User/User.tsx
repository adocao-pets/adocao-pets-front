import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'

export const User = () => {
  return (
    <div className="bg-gray-500 text-white flex items-center justify-between rounded-lg p-3">
      <Link href="/user-edit" passHref className="flex-1">
        <div className="flex flex-col">
          <span className="text-sm">Olá</span>
          <span className="text-lg font-semibold">Usuário</span>
        </div>
      </Link>
      <Link href="/" passHref replace>
        <FiLogOut size={15} />
      </Link>
    </div>
  )
}
