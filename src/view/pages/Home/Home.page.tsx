import { useState } from 'react'
import { MainLayout } from '@layouts'
import { Header } from '@components'
// import { SearchBox, CompanyCard } from './components'
import { SearchBox, CompaniesList } from './components'

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

const companies = Array<CompanyData>(10).fill({
  logoUrl: '/img/logos/monsters-inc-logo.webp',
  name: 'Monsters, Inc.',
  city: 'Monstropolis',
  specialities: ['Energy']
})

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
        <CompaniesList companies={companies} />
      </main>
      <footer className='flex'>
        Challenge done by...
      </footer>
    </MainLayout>
  )
}
