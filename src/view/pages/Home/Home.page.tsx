import { MainLayout } from '@layouts'
import { Header, Footer, Loading, SadMessage } from '@components'
import { useCompany } from '@hooks'
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
  const { companies, searchParams, setSearchParams, isLoading } = useCompany()
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
        { !isLoading && companies?.length ? <CompaniesList companies={companies} /> : null }
        { !isLoading && !companies?.length ? <SadMessage text={'No companies found'} /> : null }
        { isLoading ? <Loading text={'loading companies'} /> : null }
      </main>
      <Footer />
    </MainLayout>
  )
}
