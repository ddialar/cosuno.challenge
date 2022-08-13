import { useState } from 'react'
import { MainLayout } from '@layouts'
import { Header } from '@components'
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
      <footer className='flex justify-center items-center h-[45px] bg-blue-main text-white text-sm'>
         Challenge coded by
        <a href="http://linkedin.com/in/ddialar" target="_blank" rel="noopener noreferrer">
          <span className='ml-1 font-bold'>Dailos Rafael Díaz Lara</span>

        </a>
      </footer>
    </MainLayout>
  )
}
