import { useState } from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchBox } from './SearchBox.component'

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

export default {
  title: 'Pages/Home/SearchBox/Default',
  component: SearchBox
} as ComponentMeta<typeof SearchBox>

export const Default: ComponentStory<typeof SearchBox> = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ search: '', filters: [] })
  const onSearchChange = (args: SearchParams) => {
    setSearchParams({ ...args })
  }

  return (
    <SearchBox
      availableFilters={availableFilters}
      searchParams={searchParams}
      onSearchChange={onSearchChange}
    />
  )
}
