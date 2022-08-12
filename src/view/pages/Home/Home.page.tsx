import { useState } from 'react'
import Image from 'next/image'
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
        <ul>
          <li className='px-4 py-2'>
            <div role='company-card' className='flex md:flex-col bg-white drop-shadow-lg rounded-md' style={{ maxHeight: '100px' }}>
              <div>
                <Image src={'/img/logos/bechtel-logo.png'} width='100%' height='100%' className='rounded-tl-md rounded-bl-md' />
              </div>
              <div className='flex flex-col pt-1 pb-2 pl-2'>
                <span>Company name</span>
                <span className='text-sm'>City</span>
                <ul className='flex flex-1 items-end text-sm text-blue-500'>
                  <li className='px-2 mr-1 border border-blue-500 rounded-md'>Esp. #1</li>
                  <li className='px-2 mr-1 border border-blue-500 rounded-md'>Esp. #2</li>
                  <li className='px-2 mr-1 border border-blue-500 rounded-md'>Esp. #3</li>
                </ul>
              </div>
            </div>
            {/* Insert a block with the company information */}
          </li>
        </ul>
      </main>
      <footer className='flex'>
        Challenge done by...
      </footer>
    </MainLayout>
  )
}
