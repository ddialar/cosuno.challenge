import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { CompaniesList } from './CompaniesList.component'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof CompaniesList>) =>
  render(<CompaniesList {...properties} />)

const amountOfCompanies = 10
const mockedCompanyData = {
  logoUrl: '/img/logos/monsters-inc-logo.webp',
  name: 'Monsters, Inc.',
  city: 'Monstropolis',
  specialities: ['Energy']
}
const companies = Array<CompanyData>(amountOfCompanies).fill(mockedCompanyData)

describe('CompaniesList component', () => {
  it('render success', async () => {
    const properties: ComponentProps<typeof CompaniesList> = {
      companies
    }
    const { queryAllByRole } = setup({ ...properties })

    const companyCards = queryAllByRole('company-card')
    expect(companyCards).toHaveLength(amountOfCompanies)
  })
})
