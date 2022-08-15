import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header.component'
import '@testing-library/jest-dom'

describe('Header component', () => {
  it('renders successfully', () => {
    const { getByAltText, getByText } = render(<Header />)

    const image = getByAltText('Cosuno logo')
    expect(image).toBeInTheDocument()

    const title = getByText('Companies Directory')
    expect(title).toBeInTheDocument()
  })
})
