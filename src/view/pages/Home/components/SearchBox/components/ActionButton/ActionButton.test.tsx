import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ActionButton } from './ActionButton.component'
import { FilterIcon } from '@components'
import '@testing-library/jest-dom'

describe('ActionButton component', () => {
  const buttonProperties = {
    text: 'Apply filters',
    icon: <FilterIcon aria-label='filter icon' className='w-4 h-4 mr-1' />,
    className: 'bg-blue-500 text-white border-blue-500',
    onClick: jest.fn()
  }

  it('render success', () => {
    const button = render(<ActionButton {...buttonProperties} />)
    expect(button.getByText('Apply filters')).toBeTruthy()

    const icon = button.getByLabelText('filter icon')
    expect(icon).toBeInTheDocument()
  })

  it('onClick event triggered successfully', () => {
    const button = render(<ActionButton {...buttonProperties} />)

    fireEvent.click(button.getByText('Apply filters'))
    expect(buttonProperties.onClick).toHaveBeenCalled()
  })
})
