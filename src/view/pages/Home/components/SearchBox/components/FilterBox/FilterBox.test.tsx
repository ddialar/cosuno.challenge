import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { FilterBox } from './FilterBox.component'
import '@testing-library/jest-dom'

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

describe('FilterBox component', () => {
  it('render success', () => {
    const properties = {
      availableFilters: mockedData.availableFilters,
      selectedFilters: mockedData.selectedFilters,
      onChange: jest.fn()
    }

    const { getByText } = render(<FilterBox {...properties} />)
    mockedData.availableFilters.forEach(filter => {
      expect(getByText(filter)).toBeTruthy()
    })
  })

  it('a selected filter is active', () => {
    const filter = 'Excavation'
    const properties = {
      availableFilters: mockedData.availableFilters,
      selectedFilters: mockedData.selectedFilters
    }

    const { getByRole } = render(<FilterBox {...properties} onChange={() => {}} />)

    const checkbox = getByRole('checkbox', { name: filter })
    expect(checkbox).toBeChecked()
  })

  it('a selected filter is active', () => {
    const filter = 'Plumbing'
    const properties = {
      availableFilters: mockedData.availableFilters,
      selectedFilters: mockedData.selectedFilters
    }

    const { getByRole } = render(<FilterBox {...properties} onChange={() => {}} />)

    const checkbox = getByRole('checkbox', { name: filter })
    expect(checkbox).not.toBeChecked()
  })

  it('the action event is triggered successfully', () => {
    const filter = 'Plumbing'
    const properties = {
      availableFilters: mockedData.availableFilters,
      selectedFilters: mockedData.selectedFilters,
      onChange: jest.fn()
    }

    const { getByText } = render(<FilterBox {...properties} />)

    const filterLabel = getByText(filter)
    fireEvent.click(filterLabel)
    expect(properties.onChange).toHaveBeenCalled()
  })
})
