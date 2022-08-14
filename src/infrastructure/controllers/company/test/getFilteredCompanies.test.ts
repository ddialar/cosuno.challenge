import { getFilteredCompanies } from '../company.controllers'
import { companyFixtures } from '@fixtures'

describe('Company controller - getFilteredCompanies', () => {
  it('retrieve companies when the search string is empty', async () => {
    const search = ''
    const filters: Array<string> = []
    const expectedResult = companyFixtures.length
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toHaveLength(expectedResult)
  })

  it('retieve companies when the search param matches with persisted companies', async () => {
    const { length, [length - 1]: selectedCompany } = companyFixtures
    const search = selectedCompany.name.substring(1, 3)
    const filters: Array<string> = []
    const expectedResult = [selectedCompany]
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toStrictEqual(expectedResult)
  })

  it('no companies retrieved when the search param does not match', async () => {
    const search = 'NonValidSearchParam'
    const filters: Array<string> = []
    const expectedResult = 0
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toHaveLength(expectedResult)
  })

  it('retieve companies when no specializations are provided', async () => {
    const search = ''
    const filters: Array<string> = []
    const expectedResult = companyFixtures.length
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toHaveLength(expectedResult)
  })

  it('retieve companies filtered by specializations', async () => {
    const search = ''
    const filters: Array<string> = ['Scaffolding', 'Demolition']
    const expectedResult = companyFixtures.filter(({ specialities }) => specialities.some(speciality => filters.includes(speciality)))
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toHaveLength(expectedResult.length)

    result.forEach(company => {
      const expectedCompany = expectedResult.find(({ name }) => company.name === name)
      expect(company).toStrictEqual(expectedCompany)
    })
  })

  it('no companies retrieved when specialization param does not match', async () => {
    const search = ''
    const filters: Array<string> = ['NonValidSpeciality']
    const expectedResult = 0
    const result = await getFilteredCompanies({ search, filters })

    expect(result).toHaveLength(expectedResult)
  })
})
