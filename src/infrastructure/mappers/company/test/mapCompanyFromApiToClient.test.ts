import { mapCompanyFromApiToClient } from '../company.mappers'

describe('Mappers - mapCompanyFromApiToClient', () => {
  it('should map providing no arguments', () => {
    const args = undefined
    const expectedResult = {
      logoUrl: '/img/logos/cosuno-avatar.webp',
      name: 'Name not defined',
      city: '',
      specialities: []
    }
    const result = mapCompanyFromApiToClient(args)

    expect(result).toStrictEqual(expectedResult)
  })

  it('should map providing no arguments', () => {
    const args = {
      logoUrl: '/path/to/image.webp',
      name: 'Testing Company',
      city: 'Testing City',
      specialities: ['Speciality 1', 'Speciality 2', 'Speciality 3']
    }
    const expectedResult = { ...args }
    const result = mapCompanyFromApiToClient(args)

    expect(result).toStrictEqual(expectedResult)
  })
})
