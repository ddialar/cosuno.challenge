import { useState } from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterBox } from './FilterBox.component'

const mockedData = {
  availableFilters: [
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
  ],
  selectedFilters: [
    'Excavation',
    'Electrical',
    'Stonemasonry',
    'Joinery',
    'Painting',
    'Scaffolding'
  ]
}

export default {
  title: 'Pages/Home/SearchBox/components/FilterBox',
  component: FilterBox
} as ComponentMeta<typeof FilterBox>

export const Default: ComponentStory<typeof FilterBox> = () => {
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([...mockedData.selectedFilters])

  const handleFilterSelection = (filter: string) => {
    const result = selectedFilters.includes(filter)
      ? selectedFilters.filter(checkedFilter => checkedFilter !== filter)
      : [...selectedFilters, filter]

    setSelectedFilters(result)
  }

  return (
    <FilterBox
      availableFilters={mockedData.availableFilters}
      selectedFilters={selectedFilters}
      onChange={handleFilterSelection}
    />
  )
}
