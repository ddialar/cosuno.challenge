import type { FC } from 'react'
import { SpinnerIcon } from '@components'

interface Props {
  text: string
  className?: string
}

export const Loading: FC<Props> = ({ text, className = '' }) =>
  <div className={`
    flex
    flex-1
    justify-center
    items-center
    p-4
    text-xl
    text-gray-500
    font-semibold
    ${className}
  `}>
    <SpinnerIcon aria-label='spinner' className='w-6 h-6 mr-2' />
    <span aria-label='loading message'>{text}</span>
  </div>
