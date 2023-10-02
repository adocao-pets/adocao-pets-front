import { cva } from 'class-variance-authority'

export const variants = cva(
  ['rounded-xl', 'p-3', 'font-medium', 'w-full', 'cursor-pointer'],
  {
    variants: {
      variant: {
        primary: [
          'focus:border-3',
          'bg-blue-500',
          'text-white',
          'hover:bg-blue-700',
          'focus:border-blue-100',
        ],
        plainGrey: [],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)
