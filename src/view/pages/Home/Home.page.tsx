import { useState } from 'react'
import useSWR from 'swr'
import { MainLayout } from '@layouts'
import { Header, Footer } from '@components'
import { SearchBox, CompaniesList } from './components'

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

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ search: '', filters: [] })
  const onSearchChange = (args: SearchParams) => {
    setSearchParams({ ...args })
  }

  const { data: companies } = useSWR(['/api/companies', searchParams])

  return (
    <MainLayout>
      <Header />
      <main className='flex flex-col flex-1'>
        <SearchBox
          availableFilters={availableFilters}
          searchParams={searchParams}
          onSearchChange={onSearchChange}
        />
        {
          companies
            ? <CompaniesList companies={companies} />
            : <span>Loading...</span>
        }
      </main>
      <Footer />
    </MainLayout>
  )
}
