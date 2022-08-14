import { companyFixtures } from '@fixtures'

// ###########################################################
// #####                     UTILS                       #####
// ###########################################################

interface FilterArguments {
  searchParams: SearchParams
  companies: CompanyData[]
}

interface FilterResults extends FilterArguments {}

const filterCompanyBySearch = async ({ searchParams, companies }: FilterArguments): Promise<FilterResults> => ({
  searchParams,
  companies: searchParams.search
    ? await Promise.resolve(companies.filter(company => Boolean(company.name.match(new RegExp(searchParams.search, 'i')))))
    : companies
})

const filterCompanyBySpeciality = async ({ searchParams, companies }: FilterArguments): Promise<FilterResults> => ({
  searchParams,
  companies: searchParams.filters.length && companies.length
    ? await Promise.resolve(companies.filter(({ specialities }) => specialities.some(speciality => searchParams.filters.includes(speciality))))
    : companies
})

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getFilteredCompanies = async (searchParams: SearchParams): Promise<CompanyData[]> => {
  return (await Promise.resolve(filterCompanyBySpeciality(await filterCompanyBySearch({ searchParams, companies: companyFixtures })))).companies
}
