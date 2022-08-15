import { useState } from 'react'
import useSWR from 'swr'
import { mapCompanyFromApiToClient } from '@mappers'

const fetcher = async (...args: [string, Record<string, string | ReadonlyArray<string>> | undefined]): Promise<Array<CompanyData>> => {
  const [rawUrl, queryParams] = args
  // @ts-ignore
  const queryString = queryParams ? `?${(new URLSearchParams(queryParams)).toString()}` : ''
  const url = `${rawUrl}${queryString}`

  const result = await fetch(url).then(res => res.json())

  return result && result.length ? result.map(mapCompanyFromApiToClient) : []
}

export const useCompany = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ search: '', filters: [] })
  const { data: companies, error } = useSWR(['/api/companies', searchParams], fetcher)

  return {
    companies,
    searchParams,
    setSearchParams,
    error
  }
}
