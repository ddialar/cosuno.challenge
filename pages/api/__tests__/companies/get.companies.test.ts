import type { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, RequestMethod } from 'node-mocks-http'
import { StatusCodes } from 'http-status-codes'
import { companyFixtures } from '@fixtures'
import handleCompanies from '../../companies'

const { OK } = StatusCodes

const configureMockedRequest = ({ method, query }: { method: RequestMethod; query: SearchParams }) =>
  createMocks<NextApiRequest, NextApiResponse<CompanyData[]>>({ method, query })

describe('[GET] /api/companies', () => {
  it('retrieve companies when the search string is empty', async () => {
    const { req, res } = configureMockedRequest({
      method: 'GET',
      query: {
        search: '',
        filters: []
      }
    })
    const expectedResult = companyFixtures.length

    await handleCompanies(req, res)

    expect(res._getStatusCode()).toBe(OK)

    const result = res._getJSONData()
    expect(result).toHaveLength(expectedResult)
  })

  it('retieve companies when the search param matches with persisted companies', async () => {
    const { length, [length - 1]: selectedCompany } = companyFixtures
    const { req, res } = configureMockedRequest({
      method: 'GET',
      query: {
        search: selectedCompany.name.substring(1, 3),
        filters: []
      }
    })
    const expectedResult = [selectedCompany]

    await handleCompanies(req, res)

    expect(res._getStatusCode()).toBe(OK)

    const result = res._getJSONData()
    expect(result).toStrictEqual(expectedResult)
  })

  it('no companies retrieved when the search param does not match', async () => {
    const { req, res } = configureMockedRequest({
      method: 'GET',
      query: {
        search: 'NonValidSearchParam',
        filters: []
      }
    })
    const expectedResult = 0

    await handleCompanies(req, res)

    expect(res._getStatusCode()).toBe(OK)

    const result = res._getJSONData()
    expect(result).toHaveLength(expectedResult)
  })

  it('retieve companies when no specialities are provided', async () => {
    const { req, res } = configureMockedRequest({
      method: 'GET',
      query: {
        search: '',
        filters: []
      }
    })
    const expectedResult = companyFixtures.length

    await handleCompanies(req, res)

    expect(res._getStatusCode()).toBe(OK)

    const result = res._getJSONData()
    expect(result).toHaveLength(expectedResult)
  })

  // FIXME the 'query' type definition in the mocked request configuration due to the client send it as a plain string, not as an object.
  it.todo('retieve companies filtered by specialities')
  // it('retieve companies filtered by specialities', async () => {
  //   const filters = 'Scaffolding,Demolition'
  //   const { req, res } = configureMockedRequest({
  //     method: 'GET',
  //     query: {
  //       search: '',
  //       filters
  //     }
  //   })
  //   const expectedResult = companyFixtures.filter(({ specialities }) => specialities.some(speciality => filters.includes(speciality)))

  //   await handleCompanies(req, res)

  //   expect(res._getStatusCode()).toBe(OK)

  //   const result = res._getJSONData() as CompanyData[]
  //   expect(result).toHaveLength(expectedResult.length)

  //   result.forEach(company => {
  //     const expectedCompany = expectedResult.find(({ name }) => company.name === name)
  //     expect(company).toStrictEqual(expectedCompany)
  //   })
  // })

  // FIXME the 'query' type definition in the mocked request configuration due to the client send it as a plain string, not as an object.
  it.todo('no companies retrieved when specialities param does not match')
  // it('no companies retrieved when specialities param does not match', async () => {
  //   const { req, res } = configureMockedRequest({
  //     method: 'GET',
  //     query: {
  //       search: '',
  //       filters: ['NonValidSpeciality']
  //     }
  //   })
  //   const expectedResult = 0

  //   await handleCompanies(req, res)

  //   expect(res._getStatusCode()).toBe(OK)

  //   const result = res._getJSONData() as CompanyData[]
  //   expect(result).toHaveLength(expectedResult)
  // })
})
