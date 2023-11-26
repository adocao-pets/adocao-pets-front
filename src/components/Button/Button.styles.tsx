import { cva } from 'class-variance-authority'

export const variants = cva(['rounded-xl', 'cursor-pointer'], {
  variants: {
    full: {
      true: ['w-full', 'p-3'],
      false: ['py-3', 'px-10'],
    },
    variant: {
      primary: [
        'focus:border-3',
        'bg-blue-500',
        'text-white',
        'hover:bg-blue-700',
        'focus:border-blue-100',
      ],
      plainGrey: ['text-gray-400'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    full: true,
  },
})
