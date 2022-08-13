declare global {
  interface SearchParams {
    search: string
    filters: string[]
  }

  interface CompanyData {
    logoUrl: string | string | StaticImageData
    name: string
    city: string
    specialities: Array<string>
  }
}

export {}
