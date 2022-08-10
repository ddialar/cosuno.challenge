import React from 'react'
import Image from 'next/image'

export const Header = () =>
  <header className='flex px-5 py-3 justify-between items-center bg-blue-500'>
    <Image src={'/img/logos/cosuno-logo-white.svg'} width='120' height='40' alt='Cosuno logo' />
    <span className='text-white text-lg'>Companies Directory</span>
  </header>
