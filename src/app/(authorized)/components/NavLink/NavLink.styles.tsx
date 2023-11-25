import { cva } from 'class-variance-authority'

export const variants = cva(
  ['itens-center', 'flex', 'gap-3', 'rounded-lg', 'p-3'],
  {
    variants: {
      selected: {
        false: ['text-white'],
        true: ['bg-blue-200', 'text-blue-600'],
      },
    },
  },
)
