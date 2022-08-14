import type { FC } from 'react'
import Image from 'next/image'

interface Props extends CompanyData {}

export const CompanyCard: FC<Props> = ({ logoUrl, name, city, specialities }) =>
  <div role='company-card' className='flex h-full bg-white drop-shadow-lg rounded-md md:w-[397px]'>
    <div className='px-1'>
      <Image
        src={logoUrl || '/img/logos/consuno-avatar.webp'}
        width='100%'
        height='100%'
        className='rounded-tl-md rounded-bl-md'
        alt={`${name} logo`}
      />
    </div>
    <div className='flex flex-col flex-1 px-3 pt-1 pb-2'>
      <div aria-label='company-name' className='font-bold'>{name}</div>
      <div aria-label='company-city' className='text-sm'>{city}</div>
      {
        specialities.length
          ? <ul aria-label='company-specialities' className='flex flex-wrap w-full mt-2 items-end text-xs text-blue-main'>
            {
              specialities.map(speciality =>
                <li
                  key={`${name}-${speciality}`}
                  className='px-2 mt-1 mr-1 border border-blue-main rounded-md'
                >
                  {speciality}
                </li>
              )
            }
          </ul>
          : null
      }
    </div>
  </div>
