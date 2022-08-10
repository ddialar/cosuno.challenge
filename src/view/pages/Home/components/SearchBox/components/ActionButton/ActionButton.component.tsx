import type { FC, ReactNode } from 'react'

interface Props {
  text: string
  icon: ReactNode
  onClick: () => void
  className?: string
}

export const ActionButton: FC<Props> = ({ text, icon, onClick, className = '' }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`
      flex
      items-center
      px-2
      py-1
      rounded-md
      text-sm
      border
      ${className}
    `}
    >
      {icon} {text}
    </button>
  )
}
