import { useState } from 'react'
import { MainLayout } from '@layouts'
import { Header, Footer } from '@components'
import { SearchBox, CompaniesList } from './components'
// REFACTOR Remove this import!!!
import { companyFixtures } from '@fixtures'

const availableFilters = [
  'Excavation',
  'Plumbing',
  'Electrical',
  'Bricklaying',
  'Stonemasonry',
  'Carpentry',
  'Fencer',
  'Demolition',
  'Painting',
  'Decorating',
  'Scaffolding',
  'Steeplejacking'
]

// REFACTOR Remove this initialization
const companies = [...companyFixtures]

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
      {/* TODO Start with the backend side */}
      <Footer />
    </MainLayout>
  )
}
