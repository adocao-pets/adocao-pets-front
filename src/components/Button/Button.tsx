import { ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { variants } from './Button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    children: ReactNode
    full?: boolean
  }

export const Button = ({
  children,
  variant,
  className,
  full,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${className} ${variants({ variant, full })}`} {...rest}>
      {children}
    </button>
  )
}
