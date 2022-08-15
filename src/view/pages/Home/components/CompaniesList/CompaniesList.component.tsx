import type { FC } from 'react'
import { CompanyCard } from '../CompanyCard'

interface Props {
  companies: Array<CompanyData>
}

export const CompaniesList: FC<Props> = ({ companies }) =>
  <div className='flex flex-1 relative'>
    <div className='flex justify-center absolute w-full h-full overflow-y-scroll'>
      <ul className='block py-2 md:flex md:flex-wrap md:justify-between md:items-stretch md:self-start md:px-4 md:py-3 md:max-w-container'>
        {
          companies.map((company, index) =>
            <li key={`${company.name} ${index}`} className='px-4 py-2 md:px-0'>
              <CompanyCard {...company} />
            </li>
          )
        }
      </ul>
    </div>
  </div>
