import { MainLayout } from '@layouts'
import { Header } from '@components'
import { SearchBox } from './components'

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
  return (
    <MainLayout>
      <Header />
      <main className='flex flex-col flex-1'>
        <SearchBox availableFilters={availableFilters} />
      </main>
      <footer className='flex'>
        Challenge done by...
      </footer>
    </MainLayout>
  )
}
