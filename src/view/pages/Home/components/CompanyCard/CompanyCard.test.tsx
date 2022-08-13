import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { CompanyCard } from './CompanyCard.component'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof CompanyCard>) =>
  render(<CompanyCard {...properties} />)

describe('CompanyCard component', () => {
  it('render success', () => {
    const properties: ComponentProps<typeof CompanyCard> = {
      logoUrl: '/img/logos/consuno-avatar.webp',
      name: 'Monsters, Inc.',
      city: 'Monstropolis',
      specialities: ['Energy']
    }
    const { getByAltText, getByLabelText, getByText } = setup({ ...properties })

    const logo = getByAltText(`${properties.name} logo`)
    expect(logo).toBeInTheDocument()

    const companyName = getByLabelText('company-name')
    expect(companyName).toBeInTheDocument()
    expect(companyName).toHaveTextContent(properties.name)

    const companyCity = getByLabelText('company-city')
    expect(companyCity).toBeInTheDocument()
    expect(companyCity).toHaveTextContent(properties.city)

    const companySpecialities = getByLabelText('company-specialities')
    expect(companySpecialities).toBeInTheDocument()
    properties.specialities.forEach(speciality =>
      expect(getByText(speciality)).toBeInTheDocument()
    )
  })

  it('render default logo when it is not provided', () => {
    const properties: ComponentProps<typeof CompanyCard> = {
      logoUrl: '',
      name: 'Monsters, Inc.',
      city: 'Monstropolis',
      specialities: ['Energy']
    }
    const expectedResult = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    const { getByAltText } = setup({ ...properties })

    const logo = getByAltText(`${properties.name} logo`)
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveProperty('src', expectedResult)
  })

  it('specialities section is not rendered when they are not provided', () => {
    const properties: ComponentProps<typeof CompanyCard> = {
      logoUrl: '/img/logos/consuno-avatar.webp',
      name: 'Monsters, Inc.',
      city: 'Monstropolis',
      specialities: []
    }
    const { queryByLabelText } = setup({ ...properties })

    const companySpecialities = queryByLabelText('company-specialities')
    expect(companySpecialities).not.toBeInTheDocument()
  })
})
