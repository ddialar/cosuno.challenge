import type { FC } from 'react'
import { EmojiSadIcon } from '@components'

interface Props {
  text: string
  className?: string
}

export const SadMessage: FC<Props> = ({ text, className = '' }) =>
  <div className={`
    flex
    flex-col
    flex-1
    justify-center
    items-center
    text-gray-500
    text-xl
    ${className}
  `}>
    <EmojiSadIcon aria-label="sad emoji" className='w-10 h-10' />
    <span aria-label='sad message'>{text}</span>
  </div>
