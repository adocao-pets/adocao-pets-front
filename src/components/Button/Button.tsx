import { ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { variants } from './Button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    children: ReactNode
  }

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${className} ${variants({ variant })}`} {...rest}>
      {children}
    </button>
  )
}
