import { useState } from 'react'
import useSWR from 'swr'

const fetcher = async (...args: [string, Record<string, string | ReadonlyArray<string>> | undefined]) => {
  const [rawUrl, queryParams] = args
  // @ts-ignore
  const queryString = queryParams ? `?${(new URLSearchParams(queryParams)).toString()}` : ''
  const url = `${rawUrl}${queryString}`

  return await fetch(url).then(res => res.json())
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
