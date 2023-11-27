import { cva } from 'class-variance-authority'

export const variants = cva(
  ['flex flex-col', 'items-center', 'h-56', 'w-56', 'px-4', 'pt-5', 'ml-5', 'pb-0', 'bg-white', 'border-2', 'border-solid', 'rounded-2xl', 'shadow-card'],
  {
    variants: {
      selected: {
        false: ['border-gray-100'],
        true: ['border-blue-500'],
      },
    },
  },
)
