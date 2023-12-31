import { cva } from 'class-variance-authority'

export const variants = cva(
  [
    'shadow-card',
    '-solid',
    'flex',
    'h-56',
    'w-56',
    'cursor-pointer',
    'flex-col',
    'items-center',
    'gap-4',
    'overflow-hidden',
    'rounded-2xl',
    'border',
    'bg-white',
    'px-4',
    'pb-0',
    'pt-5',
    'hover:bg-blue-500/10',
  ],
  {
    variants: {
      selected: {
        false: ['border-gray-100'],
        true: ['border-blue-500', 'bg-blue-500/10'],
      },
    },
  },
)
