import { mapFromCompanySearchParamsFromRawToController } from '../company.mappers'

describe('Mappers - mapFromCompanySearchParamsFromRawToController', () => {
  it('works when no arguments are provided', () => {
    const args = {}
    const expectedResult = {
      search: '',
      filters: []
    }
    const result = mapFromCompanySearchParamsFromRawToController(args)

    expect(result).toStrictEqual(expectedResult)
  })

  it('works when arguments are provided', () => {
    const args = {
      search: 'testing',
      filters: 'test 1,test 2'
    }
    const expectedResult = {
      search: 'testing',
      filters: ['test 1', 'test 2']
    }
    const result = mapFromCompanySearchParamsFromRawToController(args)

    expect(result).toStrictEqual(expectedResult)
  })
})
