import { useState } from 'react'
import { MainLayout } from '@layouts'
import { Header } from '@components'
import { SearchBox, CompanyCard } from './components'

const availableFilters = [
  'Excavation',
  'Plumbing',
  'Electrical',
  'Bricklaying',
  'Stonemasonry',
  'Carpentry',
  'Joinery',
  'Demolition',
  'Painting',
  'Decorating',
  'Scaffolding',
  'Steeplejacking'
]

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ search: '', filters: [] })
  const onSearchChange = (args: SearchParams) => {
    setSearchParams({ ...args })
  }

  return (
    <MainLayout>
      <Header />
      <main className='flex flex-col flex-1'>
        <SearchBox
          availableFilters={availableFilters}
          searchParams={searchParams}
          onSearchChange={onSearchChange}
        />
        <ul className='flex-1 '>
          <li className='px-4 py-2'>
            <CompanyCard
              logoUrl={'/img/logos/monsters-inc-logo.webp'}
              name={'Monsters, Inc.'}
              city={'Monstropolis'}
              specialities={['Energy']}
            />
          </li>
        </ul>
      </main>
      <footer className='flex'>
        Challenge done by...
      </footer>
    </MainLayout>
  )
}
