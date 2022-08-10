import React, { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) =>
  <div className='flex flex-col h-screen'>
    {children}
  </div>
