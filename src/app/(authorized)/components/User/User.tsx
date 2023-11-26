import { FiLogOut } from 'react-icons/fi'

export const User = () => {
  return (
    <div className="bg-gray-500 text-white flex items-center justify-between rounded-lg p-3">
      <div className="flex flex-col">
        <span className="text-sm">Olá</span>
        <span className="text-lg font-semibold">Usuário</span>
      </div>
      <FiLogOut size={15} />
    </div>
  )
}
