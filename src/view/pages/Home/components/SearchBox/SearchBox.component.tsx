import { ChangeEvent, useState, useEffect, FC } from 'react'
import { SearchIcon, PlusIcon, FilterIcon } from '@components'
import { ActionButton, FilterBox } from './components'

interface Props {
  availableFilters: string[]
  displayFiltersByDefault?: boolean // 👈 propiedad definida sólo para poder interactuar con los tests
}

export const SearchBox: FC<Props> = ({ availableFilters, displayFiltersByDefault = false }) => { // 👈
  const [showFilters, setShowFilters] = useState<boolean>(displayFiltersByDefault) // 👈
  const [searchText, setSearchText] = useState<string>('')
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

  useEffect(() => {
    interface requestProps {
      search: string
      filters: string[]
    }
    const requestCompanies = async (request: requestProps): Promise<unknown[]> => {
      // TODO Invoke the request service
      console.log({ request })
      return []
    }

    const query = {
      search: searchText,
      filters: selectedFilters
    }
    requestCompanies(query)
  }, [searchText, selectedFilters])

  const handleSearchInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(value)
  }

  const handleFilterSelection = (filter: string) => {
    const result = selectedFilters.includes(filter)
      ? selectedFilters.filter(checkedFilter => checkedFilter !== filter)
      : [...selectedFilters, filter]

    setSelectedFilters(result)
  }

  return (
    <div className='flex flex-col p-4 bg-blue-500'>
      {/* Search input text */}
      <div role='search-box' className='flex items-center p-2 bg-white rounded-md'>
        <SearchIcon className='w-5 h-5 mr-2 text-gray-400' />
        <input
          type='text'
          id='search-input'
          name='search-input'
          aria-label='search input'
          placeholder='ie: ACME, Inc.'
          className='flex-1 pl-2 border border-white border-l-blue-500 focus:outline-0'
          onChange={handleSearchInput}
          value={searchText}
        />
      </div>
      {/* Search filters section */}
      <div className='flex flex-col w-full mt-2 p-2 bg-white rounded-md'>
        {
          showFilters
            ? <div className='flex flex-col items-start '>
              <ActionButton
                text='Hide filters'
                icon={<FilterIcon className='w-4 h-4 mr-1' />}
                onClick={() => setShowFilters(false)}
                className='bg-blue-500 text-white border-blue-500'
              />
              <FilterBox
                availableFilters={availableFilters}
                selectedFilters={selectedFilters}
                onChange={handleFilterSelection}
                className='pt-4'
              />
            </div>
            : <div className='flex items-center w-full'>
              <ActionButton
                text='Show filters'
                icon={<PlusIcon className='w-4 h-4 mr-1' />}
                onClick={() => setShowFilters(true)}
                className='bg-white text-blue-500 border-blue-500'
              />
              <span
                className='flex-1 ml-3 text-sm truncate'
                arial-label='apply specialities'
              >
                {formatter.format(selectedFilters)}
              </span>
            </div>
        }
      </div>
    </div>
  )
}
