export const mapCompanySearchParamsFromRawToController = ({ search, filters }: { search?: string | string[], filters?: string | string[] }): SearchParams => ({
  search: <string>search || '',
  filters: filters && typeof filters === 'string' ? filters.split(',') : []
})

export const mapCompanyFromApiToClient = (rawCompany: any): CompanyData => ({
  logoUrl: rawCompany?.logoUrl || '/img/logos/cosuno-avatar.webp',
  name: rawCompany?.name || 'Name not defined',
  city: rawCompany?.city || '',
  specialities: rawCompany?.specialities || []
})
