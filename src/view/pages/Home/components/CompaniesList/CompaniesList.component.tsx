import type { FC } from 'react'
import { CompanyCard } from '../CompanyCard'

interface Props {
  companies: Array<CompanyData>
}

export const CompaniesList: FC<Props> = ({ companies }) =>
  <div className='flex-1 relative'>
    <div className='absolute w-full h-full overflow-y-scroll'>
      <ul className='block md:flex md:flex-wrap md:justify-between md:px-2 md:py-3'>
        {
          companies.map(company =>
            <li key={company.name} className='px-4 py-2 md:px-2'>
              <CompanyCard {...company} />
            </li>
          )
        }
      </ul>
    </div>
  </div>
