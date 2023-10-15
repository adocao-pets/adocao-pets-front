/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode
  label: string
  id: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <div className="group relative flex">
        <input
          id={id}
          className="peer box-border h-[54px] w-full rounded-2xl border border-gray-200 px-3 pb-2 pt-6 text-gray-800 focus:border-4 focus:border-blue-500 focus:outline-4 focus:outline-blue-100"
          {...rest}
          required
          ref={ref}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-1/2 translate-x-0 translate-y-[-50%] cursor-text text-gray-600 transition-all duration-100 ease-in-out peer-valid:top-[15px] peer-valid:text-sm peer-focus:top-[15px] peer-focus:text-sm"
        >
          {label}
        </label>
      </div>
    )
  },
)
