import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer.component'
import '@testing-library/jest-dom'

const setup = () =>
  render(<Footer />)

describe('Footer component', () => {
  it('render success', () => {
    const { getByText, getByRole } = setup()

    const plainText = getByText('Challenge coded by')
    expect(plainText).toBeInTheDocument()

    const link = getByRole('link', { name: 'Dailos Rafael Díaz Lara' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveProperty('href', 'http://linkedin.com/in/ddialar')
  })
})
