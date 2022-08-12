import type { FC } from 'react'
import Image from 'next/image'

interface Props {
  logoUrl: string
  name: string
  city: string
  specialities: Array<string>
}

export const CompanyCard: FC<Props> = ({ logoUrl, name, city, specialities }) =>
  <div role='company-card' className='flex md:flex-col bg-white drop-shadow-lg rounded-md' style={{ maxHeight: '100px' }}>
    <div>
      <Image
        src={logoUrl || '/img/logos/consuno-avatar.png'}
        width='100%'
        height='100%'
        className='rounded-tl-md rounded-bl-md'
      />
    </div>
    <div className='flex flex-col pt-1 pb-2 pl-2'>
      <span>{name}</span>
      <span className='text-sm'>{city}</span>
      <ul className='flex flex-1 items-end text-sm text-blue-500'>
        {
          specialities.map(speciality =>
            <li
              key={`${name}-${speciality}`}
              className='px-2 mr-1 border border-blue-500 rounded-md'
            >
              {speciality}
            </li>
          )
        }
      </ul>
    </div>
  </div>
