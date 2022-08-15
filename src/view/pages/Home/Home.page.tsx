import { MainLayout } from '@layouts'
import { Header, Footer, EmojiSadIcon } from '@components'
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
  const { companies, searchParams, setSearchParams } = useCompany()
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
        {/* {
          companies
            ? companies && companies.length
              ? <CompaniesList companies={companies} />
              : <div className={'flex flex-col flex-1 justify-center items-center text-gray-500 text-xl'}>
                <EmojiSadIcon className='w-10 h-10' />
                No companies found
              </div>
              // : <span>Loading...</span>
            : <span>Loading...</span>
        } */}
        {
          companies && companies.length
            ? <CompaniesList companies={companies} />
            : <div className={'flex flex-col flex-1 justify-center items-center text-gray-500 text-xl'}>
              <EmojiSadIcon className='w-10 h-10' />
                  No companies found
            </div>
        }
      </main>
      <Footer />
    </MainLayout>
  )
}
