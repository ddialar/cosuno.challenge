export const mapCompanySearchParamsFromRawToController = ({ search, filters }: { search?: string | string[], filters?: string | string[] }): SearchParams => ({
  search: <string>search || '',
  filters: filters && typeof filters === 'string' ? filters.split(',') : []
})
