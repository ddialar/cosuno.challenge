import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  logoUrl: string | string | StaticImageData
  name: string
  city: string
  specialities: Array<string>
}

export const CompanyCard: FC<Props> = ({ logoUrl, name, city, specialities }) =>
  <div role='company-card' className='flex max-w-sm bg-white drop-shadow-lg rounded-md'>
    <Image
      src={logoUrl || '/img/logos/consuno-avatar.webp'}
      width='100%'
      height='100%'
      className='rounded-tl-md rounded-bl-md'
    />
    <div className='flex flex-col flex-1 px-3 pt-1 pb-2'>
      <div>{name}</div>
      <div className='text-sm'>{city}</div>
      <ul className='flex flex-1 items-end text-sm text-blue-main'>
        {
          specialities.map(speciality =>
            <li
              key={`${name}-${speciality}`}
              className='px-2 mr-1 border border-blue-main rounded-md'
            >
              {speciality}
            </li>
          )
        }
      </ul>
    </div>
  </div>
