import React from 'react'
import Image from 'next/image'

export const Header = () =>
  <header className='flex justify-center bg-blue-main'>
    <div className='flex flex-1 justify-between items-center px-5 py-3 w-full md:max-w-container'>
      <Image src={'/img/logos/cosuno-logo-white.svg'} width='120' height='40' alt='Cosuno logo' />
      <span className='text-white text-lg'>Companies Directory</span>
    </div>
  </header>
