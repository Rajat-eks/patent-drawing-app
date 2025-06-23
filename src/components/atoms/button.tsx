import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface PropTypes {
 children?: React.ReactNode | React.ReactNode[]
 type?: 'button' | 'submit' | 'reset' | undefined
 className?: string
 variant?: 'contained' | 'outlined'
 onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined
 fullWidth?: boolean
 color?: 'red' | 'warning' | 'green' | 'lightBlueDull' | 'black' | 'darkBlue' | 'steelBlue'
 disabled?: boolean
 loaderColor?: string
 loadingState?: true | false
}

export default function Button(props: PropTypes) {
 const {
  children,
  type,
  className,
  variant, 
  onClick,
  fullWidth,
  color = 'red',
  disabled,
  loaderColor = '#fff',
  loadingState = false,
 } = props

 return (
  <>
   <button
    onClick={onClick}
    type={type}
    className={`border-2 flex items-center py-2 2xl:px-4 md:px-2 bg-blue rounded-[8px] text-white px-3 shadow-sm  ${className} relative
      disabled:text-grayText disabled:bg-lightGray disabled:border-none disabled:cursor-not-allowed
      ${
       variant === 'outlined'
        ? `text-${color} border-${color} rounded-full`
        : `text-white bg-${color} border-${color} rounded-md hover:shadow-md`
      }
      ${fullWidth && 'w-full'}
      `}
    disabled={disabled}
   >
    {children}
    {loadingState && (
     <div className='absolute top-1 right-4'>
      <BeatLoader color={loaderColor} size={5} />
     </div>
    )}
   </button>
  </>
 )
}
