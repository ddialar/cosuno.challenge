import type { ComponentProps } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { SearchBox } from './SearchBox.component'
import '@testing-library/jest-dom'

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

const setup = (properties: ComponentProps<typeof SearchBox>) =>
  render(<SearchBox {...properties} />)

describe('SearchBox component', () => {
  it('types in the searching text box', () => {
    const value = 'ACME, Inc.'
    const properties: ComponentProps<typeof SearchBox> = {
      availableFilters,
      searchParams: {
        search: '',
        filters: []
      },
      onSearchChange: jest.fn()
    }
    const { getByRole } = setup({ ...properties })

    const input = getByRole('textbox', { name: 'search input' })
    fireEvent.change(input, { target: { value } })
    expect(properties.onSearchChange).toHaveBeenCalledWith({ search: value, filters: [] })
  })

  it('displays filters panel on demand', () => {
    const properties: ComponentProps<typeof SearchBox> = {
      availableFilters,
      searchParams: {
        search: '',
        filters: []
      },
      onSearchChange: jest.fn()
    }
    const { getByText } = setup({ ...properties })

    const showFiltersButton = getByText('Show filters')
    expect(showFiltersButton).toBeInTheDocument()
    expect(screen.queryByText('Hide filters')).not.toBeInTheDocument()

    fireEvent.click(showFiltersButton)

    const hideFiltersButton = getByText('Hide filters')
    expect(hideFiltersButton).toBeInTheDocument()
    expect(screen.queryByText('Show filters')).not.toBeInTheDocument()
  })

  it('hides filters panel on demand', () => {
    const properties: ComponentProps<typeof SearchBox> = {
      availableFilters,
      searchParams: {
        search: '',
        filters: []
      },
      onSearchChange: jest.fn(),
      displayFiltersByDefault: true
    }
    const { getByText } = setup({ ...properties })

    const hideFiltersButton = getByText('Hide filters')
    expect(hideFiltersButton).toBeInTheDocument()
    expect(screen.queryByText('Show filters')).not.toBeInTheDocument()

    fireEvent.click(hideFiltersButton)

    const showFiltersButton = getByText('Show filters')
    expect(showFiltersButton).toBeInTheDocument()
    expect(screen.queryByText('Hide filters')).not.toBeInTheDocument()
  })

  it('selects a filter', () => {
    const properties: ComponentProps<typeof SearchBox> = {
      availableFilters,
      searchParams: { search: '', filters: [] },
      onSearchChange: jest.fn(),
      displayFiltersByDefault: true
    }
    const { getByText } = setup({ ...properties })

    const filterExcavation = getByText('Excavation')
    fireEvent.click(filterExcavation)
    expect(properties.onSearchChange).toHaveBeenCalledWith({ search: '', filters: ['Excavation'] })
  })

  it('displays selected filters summary', () => {
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
    const properties: ComponentProps<typeof SearchBox> = {
      availableFilters,
      searchParams: { search: '', filters: ['Excavation', 'Plumbing', 'Electrical'] },
      onSearchChange: jest.fn()
    }
    const { getByLabelText } = setup({ ...properties })

    const filtersSummary = getByLabelText('selected specialities')
    expect(filtersSummary).toHaveTextContent(formatter.format(properties.searchParams.filters))
  })
})
