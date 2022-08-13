import { FC, ChangeEvent, useState } from 'react'
import { SearchIcon, PlusIcon, FilterIcon } from '@components'
import { ActionButton, FilterBox } from './components'

interface Props {
  availableFilters: string[]
  searchParams: SearchParams
  onSearchChange: (args: SearchParams) => void
  displayFiltersByDefault?: boolean
}

export const SearchBox: FC<Props> = ({ availableFilters, searchParams, onSearchChange, displayFiltersByDefault = false }) => { // 👈
  const [showFilters, setShowFilters] = useState<boolean>(displayFiltersByDefault)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

  const handleSearchInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    onSearchChange({ ...searchParams, search: value })
  }

  const handleFilterSelection = (filter: string) => {
    const result = searchParams.filters.includes(filter)
      ? searchParams.filters.filter(checkedFilter => checkedFilter !== filter)
      : [...searchParams.filters, filter]

    onSearchChange({ ...searchParams, filters: [...result] })
  }

  return (
    <div className='flex flex-col p-4 bg-blue-main'>
      {/* Search input text */}
      <div role='search-box' className='flex items-center p-2 bg-white rounded-md'>
        <SearchIcon className='w-5 h-5 mr-2 text-gray-400' />
        <input
          type='text'
          id='search-input'
          name='search-input'
          aria-label='search input'
          placeholder='ie: ACME, Inc.'
          className='flex-1 pl-2 border border-white border-l-blue-main focus:outline-0'
          onChange={handleSearchInput}
          value={searchParams.search}
        />
      </div>
      {/* Search filters section */}
      <div role='filters-box' className='flex flex-col w-full mt-2 p-2 bg-white rounded-md'>
        {
          showFilters
            ? <div className='flex flex-col items-start '>
              <ActionButton
                text='Hide filters'
                icon={<FilterIcon className='w-4 h-4 mr-1' />}
                onClick={() => setShowFilters(false)}
                className='bg-blue-main text-white border-blue-main'
              />
              <FilterBox
                availableFilters={availableFilters}
                selectedFilters={searchParams.filters}
                onChange={handleFilterSelection}
                className='pt-4'
              />
            </div>
            : <div className='flex items-center w-full'>
              <ActionButton
                text='Show filters'
                icon={<PlusIcon className='w-4 h-4 mr-1' />}
                onClick={() => setShowFilters(true)}
                className='bg-white text-blue-main border-blue-main'
              />
              <span
                className='flex-1 ml-3 text-sm truncate'
                aria-label='selected specialities'
              >
                {formatter.format(searchParams.filters)}
              </span>
            </div>
        }
      </div>
    </div>
  )
}
