import { mapCompanySearchParamsFromRawToController } from '../company.mappers'

describe('Mappers - mapCompanySearchParamsFromRawToController', () => {
  it('should map providing no arguments', () => {
    const args = {}
    const expectedResult = {
      search: '',
      filters: []
    }
    const result = mapCompanySearchParamsFromRawToController(args)

    expect(result).toStrictEqual(expectedResult)
  })

  it('should map providing arguments', () => {
    const args = {
      search: 'testing',
      filters: 'test 1,test 2'
    }
    const expectedResult = {
      search: 'testing',
      filters: ['test 1', 'test 2']
    }
    const result = mapCompanySearchParamsFromRawToController(args)

    expect(result).toStrictEqual(expectedResult)
  })
})
